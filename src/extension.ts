// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { FunctionParser } from './functionparser';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {
    vscode.window.showInformationMessage("DocMachine: supported language detected");
    let b = 0;
    vscode.workspace.onDidChangeTextDocument(changeEvent => {
        let change: vscode.TextDocumentContentChangeEvent = changeEvent.contentChanges[0];

        vscode.window.showInformationMessage(change.text.split(' ')[0]);
        vscode.window.showInformationMessage(change.text.split(' ')[1]);

        let tokens: string[] = change.text.split(' ');

        if (tokens[0] === "/**\n") {
            const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            if (editor) {
                let document: vscode.TextDocument = editor.document;
                let bodyPos: vscode.Position = change.range.start.translate(1, 0);
                vscode.window.showInformationMessage(change.range.end.character.toFixed());
                editor.edit(editBuilder => {
                    editBuilder.insert(bodyPos, " * bababooey\n");
                });
            }
        }
    });
}
// this method is called when your extension is deactivated
export function deactivate() {}

function generateFunctionContract(fparser: FunctionParser, offset: number): string {
    let result: string = "";
    for (let param of fparser.getParamNames()) {
        result += getSpaces(offset);
        result += " * @param " + param;
    }
    if (fparser.getReturnType()) {
        result += getSpaces(offset);
        result += " * @returns " + fparser.getReturnType();
    }
    for (let except of fparser.getExceptions()) {
        result += getSpaces(offset);
        result += " * @throws " + except;
    }
    return result;
}

function getSpaces(length: number) {
    let result: string = "";
    for (let i = 0; i < length; i++) {
        result += " ";
    }
    return result;
}