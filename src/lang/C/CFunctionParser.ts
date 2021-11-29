/*!
 * Copyright 2021 Jasper Geer. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */

import { CharStream, CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { FunctionParser } from "../FunctionParser";
import { DMErrorStrategy } from "../DMErrorStrategy";
import { FunctionData } from "../FunctionData";
import { CFunctionVisitor } from "./CFunctionVisitor";
import { CLexer } from "../../antlr/C/CLexer";
import { CParser } from "../../antlr/C/CParser";

export class CFunctionParser implements FunctionParser {
    private tree: ParseTree | null = null;
    private visitor: CFunctionVisitor;
    private funcData: FunctionData;

    /**
     * Create a new CFunctionParser and parse the given stream of characters to extract function
     * signature information if possible
     * @param chars stream of characters to parse
     * @returns new CFunctionParser
     */
    constructor(chars: CharStream) {
        this.visitor = new CFunctionVisitor();
        this.funcData = {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
        let thisChar: number = chars.LA(1);
        let funcStr: string = "";
        
        /* don't parse if this is a comment or an invalid beginning of a function signature */
        if (thisChar === "/".charCodeAt(0) || thisChar === "\n".charCodeAt(0)) {
            return;
        }

        /* we only pass the function signature to the parser */
        while (thisChar !== ")".charCodeAt(0)) {
            /* function signatures should not contain these characters */
            if (thisChar === -1 || thisChar === ";".charCodeAt(0) || thisChar === "#".charCodeAt(0)) {
                return;
            }
            funcStr += String.fromCharCode(thisChar);
            chars.consume();
            thisChar = chars.LA(1);
        }
        funcStr += ")";

        /* parse the function signature */
        chars = CharStreams.fromString(funcStr);
        let lexer = new CLexer(chars);
        let tokens = new CommonTokenStream(lexer);
        let parser = new CParser(tokens);
        let errorStrategy = new DMErrorStrategy();
        parser.errorHandler = errorStrategy;

        /* only extract data if this is a valid function signature */
        if (!errorStrategy.foundInvalidText()) {
            this.tree = parser.compilationUnit();
            this.funcData = this.visitor.visit(this.tree);
        }
    }

    getParamNames(): string[] {
        return this.funcData.paramNames;
    }

    getReturnType(): string {
        return this.funcData.returnType;
    }

    getExceptions(): string[] {
        return this.funcData.exceptions;
    }
    
}