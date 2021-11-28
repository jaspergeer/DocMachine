/*!
 * Copyright 2021 Jasper Geer. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */

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
    /* 
     * create a map of language ids and function parser constructors with an entry for each
     * supported language
     */
    let funcParsers = new Map<string, FunctionParserConstructor>();

    /* currently supported languages: c, c++ */
    funcParsers.set("c", CFunctionParser);
    funcParsers.set("cpp", CFunctionParser);

    vscode.workspace.onDidChangeTextDocument(changeEvent => {
        let change: vscode.TextDocumentContentChangeEvent = changeEvent.contentChanges[0];
        /* we insert documentation when a DocMachine comment is created */
        if (change.text.split(" ")[0] === "/**\n") {
            const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
            let document: vscode.TextDocument = changeEvent.document;
            /* check that the document being edited is the document with changes */
            if (editor?.document === document) {
                let langId = editor.document.languageId;
                let ctor: FunctionParserConstructor | undefined = funcParsers.get(langId);
                if (ctor) {
                    /* get the position that the body of the documentation will begin at */
                    let bodyPos: vscode.Position = change.range.start.translate(1, 0);
                    let documentation: string;

                    /* if we are at the top line of the file insert a header */
                    if (bodyPos.line === 1) {
                    /* create the file header */
                    documentation = generateFileHeader(document);

                    /* if we are not at the top line insert a function contract */
                    } else {
                        let range: vscode.Range = document.validateRange(
                            new vscode.Range(new vscode.Position(change.range.end.line + 2, 0),
                            new vscode.Position(document.lineCount, 0)));
                        /* 
                         * get the text beginning at the function declaration to the end of the
                         * file and pass it to the function parser
                         */
                        let toParse: string = document.getText(range);
                        let fparser: FunctionParser = createFunctionParser(ctor, 
                            CharStreams.fromString(toParse));
                        documentation = generateFunctionContract(fparser, bodyPos.character);
                    }

                    /* insert the documentation */
                    editor.edit(editBuilder => {
                        editBuilder.insert(new vscode.Position(bodyPos.line, 0), documentation);
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
    let config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("docmachine.contracts");
    let result: string = generateSpaces(offset) + " * @brief \n";
    result += generateSpaces(offset) + " * \n";
    for (let param of fparser.getParamNames()) {
        result += generateSpaces(offset);
        result += " * " + config.get("paramPrefix") + param + "\n";
    }
    if (fparser.getReturnType()) {
        result += generateSpaces(offset);
        result += " * " + config.get("returnPrefix") + fparser.getReturnType() + "\n";
    }
    for (let except of fparser.getExceptions()) {
        result += generateSpaces(offset);
        result += " * " + config.get("exceptPrefix") + except + "\n";
    }
    return result;
}

/**
 * Create a formatted file header
 * @returns formatted file header
 */
function generateFileHeader(document: vscode.TextDocument): string {
    let config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("docmachine.headers");
    let result: string = "";
    let filePath: string[] = document.fileName.split("/");
    if (config.get("fileToggle")) {
        result += " * " + config.get("filePrefix") + filePath[filePath.length - 1] + "\n";
    }
    if (config.get("authorToggle")) {
        result += " * " + config.get("authorPrefix") + "\n";
    }
    if (config.get("descToggle")) {
        result += " * " + config.get("descPrefix") + "\n";
    }
    if (config.get("versionToggle")) {
        result += " * " + config.get("versionPrefix") + "\n";
    }
    let date: Date = new Date();
    if (config.get("dateToggle")) {
        result += " * " + config.get("datePrefix") + date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay() + "\n";
    }
    if (config.get("copyrightToggle")) {
        result += " * " + config.get("copyrightPrefix") + date.getFullYear() + "\n";
    }
    if (config.get("licenseToggle")) {
        result += " * " + config.get("license") + "\n";
    }
    return result;
}

/**
 * Create a string containing a given number of space characters
 * @param length number of spaces
 * @returns string containing given number of spaces
 */
function generateSpaces(length: number) {
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