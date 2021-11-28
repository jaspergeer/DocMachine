// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { CharStream, CharStreams } from 'antlr4ts';
import * as vscode from 'vscode';
import { CFunctionParser } from './antlr/C/CFunctionParser';
import { FunctionParser, FunctionParserConstructor } from './FunctionParser';

/**
 * This function is called when vscode activates this extension. This extension is activated when
 * a file in a supported language is opened in the editor.
 * @param context ExtensionContext passed by vscode on activation
 */
export function activate(context: vscode.ExtensionContext): void {
    vscode.window.showInformationMessage("DocMachine: supported language detected");
    let funcParsers = new Map<string, FunctionParserConstructor>();
    funcParsers.set("c", CFunctionParser);

    vscode.workspace.onDidChangeTextDocument(changeEvent => {
        let change: vscode.TextDocumentContentChangeEvent = changeEvent.contentChanges[0];
        /* we insert documentation when a two asterisk comment is created */
        if (change.text === "/**") {
            const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            let document: vscode.TextDocument = changeEvent.document;
            if (editor?.document === document) {
                let langId = editor.document.languageId;
                let ctor: FunctionParserConstructor | undefined = funcParsers.get(langId);
                if (ctor) {
                    let bodyPos: vscode.Position = change.range.start.translate(1, 0);
                    let documentation: string;
                    /* if we are at the top line of the file insert a header */
                    if (bodyPos.line === 1) {
                        documentation = generateFileHeader();
                    /* if we are not at the top line insert a function contract */
                    } else {
                        let range: vscode.Range = document.validateRange(
                            new vscode.Range(change.range.end,
                            change.range.end.translate(document.lineCount)));
                        /* 
                         * get the text beginning at the function declaration to the end of the
                         * file and pass it to the function parser
                         */
                        let toParse: string = document.getText(range);
                        let fparser: FunctionParser = createFunctionParser(ctor, 
                            CharStreams.fromString(toParse));
                        documentation = generateFunctionContract(fparser, 
                            bodyPos.character);
                    }
                    /* insert the documentation */
                    editor.edit(editBuilder => {
                        editBuilder.insert(bodyPos, documentation);
                    });
                }
            }
        }
    });
}

export function deactivate() {}

/**
 * Create a formatted function contract
 * @param fparser function parser to extract data about the function
 * @param offset number of spaces to be placed before each line of the contract
 * @returns formatted function contract
 */
function generateFunctionContract(fparser: FunctionParser, offset: number): string {
    let result: string = "\n * \n";
    for (let param of fparser.getParamNames()) {
        result += getSpaces(offset);
        result += " * @param " + param + "\n";
    }
    if (fparser.getReturnType()) {
        result += getSpaces(offset);
        result += " * @returns " + fparser.getReturnType() + "\n";
    }
    for (let except of fparser.getExceptions()) {
        result += getSpaces(offset);
        result += " * @throw " + except + "\n";
    }
    result += getSpaces(offset);
    result += " */\n";
    return result;
}

function getSpaces(length: number) {
    let result: string = "";
    for (let i = 0; i < length; i++) {
        result += " ";
    }
    return result;
}

function generateFileHeader(): string {
    return " placeholder header */\n";
}

function createFunctionParser(ctor: FunctionParserConstructor, chars: CharStream) {
    return new ctor(chars);
}