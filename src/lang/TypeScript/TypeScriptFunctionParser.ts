import { CharStream, CommonTokenStream, Lexer, TokenStream } from "antlr4ts";
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
        this.funcData = {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
        this.visitor = new TypeScriptFunctionVisitor();
        let lexer: Lexer = new TypeScriptLexer(chars);
        let tokens: TokenStream = new CommonTokenStream(lexer);
        let parser = new TypeScriptParser(tokens);
        this.tree = parser.program();
        this.funcData = this.visitor.visit(this.tree);
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