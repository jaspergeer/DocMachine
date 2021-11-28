// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { CharStream, CharStreams } from 'antlr4ts';
import * as vscode from 'vscode';
import { CFunctionParser } from './antlr/C/CFunctionParser';
import { FunctionParser, FunctionParserConstructor } from './FunctionParser';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {
    vscode.window.showInformationMessage("DocMachine: supported language detected");
    let funcParsers = new Map<string, FunctionParserConstructor>();
    funcParsers.set("c", CFunctionParser);

    vscode.workspace.onDidChangeTextDocument(changeEvent => {
        let change: vscode.TextDocumentContentChangeEvent = changeEvent.contentChanges[0];
        if (change.text === "/**") {
            const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            let document: vscode.TextDocument = changeEvent.document;
            if (editor?.document === document) {
                let langId = editor.document.languageId;
                let ctor: FunctionParserConstructor | undefined = funcParsers.get(langId);
                if (ctor) {
                    let bodyPos: vscode.Position = change.range.start.translate(1, 0);
                    let range: vscode.Range = document.validateRange(
                        new vscode.Range(change.range.end,
                        change.range.end.translate(document.lineCount)));
                    let toParse: string = document.getText(range);
                    let fparser: FunctionParser = createFunctionParser(ctor, 
                        CharStreams.fromString(toParse));
                    editor.edit(editBuilder => {
                        editBuilder.insert(bodyPos, generateFunctionContract(fparser, bodyPos.character));
                    });
                }
            }
        }
    });
}
// this method is called when your extension is deactivated
export function deactivate() {}

function generateFunctionContract(fparser: FunctionParser, offset: number): string {
    let result: string = "\n";
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

function createFunctionParser(ctor: FunctionParserConstructor, chars: CharStream) {
    return new ctor(chars);
}