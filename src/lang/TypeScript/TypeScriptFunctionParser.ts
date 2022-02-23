import { CharStream, CharStreams, CommonTokenStream, Lexer, TokenStream } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TypeScriptLexer } from "../../antlr/TypeScript/TypeScriptLexer";
import { TypeScriptParser } from "../../antlr/TypeScript/TypeScriptParser";
import { DMErrorStrategy } from "../DMErrorStrategy";
import { FunctionData } from "../FunctionData";
import { FunctionParser } from "../FunctionParser";
import { TypeScriptFunctionVisitor } from "./TypeScriptFunctionVisitor";

export class TypeScriptFunctionParser implements FunctionParser {
    private tree: ParseTree | null = null;
    private visitor: TypeScriptFunctionVisitor;
    private funcData: FunctionData;

    constructor(chars: CharStream) {
        this.visitor = new TypeScriptFunctionVisitor();
        this.funcData = {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
        
        /* don't parse if this is a comment or an invalid beginning of a function signature */
        if (chars.LA(1) === "/".charCodeAt(0) || chars.LA(1) === "\n".charCodeAt(0)) {
            return;
        }
        
        let lexer: Lexer = new TypeScriptLexer(chars);
        let tokens: TokenStream = new CommonTokenStream(lexer);
        let parser = new TypeScriptParser(tokens);
        let errorStrategy = new DMErrorStrategy();
        parser.errorHandler = errorStrategy;

        /* only extract data if this is a valid function signature */
        if (!errorStrategy.foundInvalidText()) {
            this.tree = parser.program();
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