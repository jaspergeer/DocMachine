import { CharStream, CharStreams } from 'antlr4ts';
import { EOF } from 'dns';
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
    /* 
     * create a map of language ids and function parser constructors with an entry for each
     * supported language
     */
    let funcParsers = new Map<string, FunctionParserConstructor>();
    funcParsers.set("c", CFunctionParser);

    vscode.workspace.onDidChangeTextDocument(changeEvent => {
        let change: vscode.TextDocumentContentChangeEvent = changeEvent.contentChanges[0];
        /* we insert documentation when a two asterisk comment is created */
        if (change.text === "/**") {
            const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            let document: vscode.TextDocument = changeEvent.document;
            /* check that the document being edited is the document with changes */
            if (editor?.document === document) {
                let langId = editor.document.languageId;
                let ctor: FunctionParserConstructor | undefined = funcParsers.get(langId);
                if (ctor) {
                    let bodyPos: vscode.Position = change.range.start.translate(1, 0);
                    console.log(change.range.start);
                    console.log(bodyPos);

                    /* if we are at the top line of the file insert a header */
                    if (bodyPos.line === 1) {
                    /* insert the file header */
                    editor.edit(editBuilder => {
                        editBuilder.insert(bodyPos, generateFileHeader());
                    });

                    /* if we are not at the top line insert a function contract */
                    } else {
                        let range: vscode.Range = document.validateRange(
                            new vscode.Range(change.range.end.translate(0,1),
                            change.range.end.translate(document.lineCount)));
                        /* 
                         * get the text beginning at the function declaration to the end of the
                         * file and pass it to the function parser
                         */
                        let toParse: string = document.getText(range);
                        console.log(toParse);
                        let fparser: FunctionParser = createFunctionParser(ctor, 
                            CharStreams.fromString(toParse));
                        /* insert the documentation */
                        editor.edit(editBuilder => {
                            editBuilder.insert(new vscode.Position(bodyPos.line, 0), "\n");
                            editBuilder.insert(new vscode.Position(bodyPos.line, 0), generateFunctionContract(fparser, 
                                bodyPos.character));
                        });
                    }
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
    let result: string = getSpaces(offset) + " * @brief \n";
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

/**
 * Created a formatted file header
 * @returns formatted file header
 */
function generateFileHeader(): string {
    // TODO implement this
    return " placeholder header */\n";
}

/**
 * Create a string containing a given number of space characters
 * @param length number of spaces
 * @returns string containing given number of spaces
 */
function getSpaces(length: number) {
    let result: string = "";
    for (let i = 0; i < length; i++) {
        result += " ";
    }
    return result;
}

/**
 * Given a function parser constructor and charstream create a function parser
 * @param ctor function parser constructor
 * @param chars charstream to pass to constructor
 * @returns function parser created by constructor
 */
function createFunctionParser(ctor: FunctionParserConstructor, chars: CharStream) {
    return new ctor(chars);
}