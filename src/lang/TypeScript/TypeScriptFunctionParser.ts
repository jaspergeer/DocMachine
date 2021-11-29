import { CharStream, CommonTokenStream, Lexer, TokenStream } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TypeScriptLexer } from "../../antlr/TypeScript/TypeScriptLexer";
import { TypeScriptParser } from "../../antlr/TypeScript/TypeScriptParser";
import { DMErrorStrategy } from "../DMErrorStrategy";
import { FunctionParser } from "../FunctionParser";
import { TypeScriptFunctionVisitor } from "./TypeScriptFunctionVisitor";

export class TypeScriptFunctionParser implements FunctionParser {
    private tree: ParseTree | null = null;
    private visitor: TypeScriptFunctionVisitor;
    private paramNames: string[] = [];
    private returnType: string = "";
    private exceptions: string[] = [];

    constructor(chars: CharStream) {
        this.visitor = new TypeScriptFunctionVisitor();
        let lexer: Lexer = new TypeScriptLexer(chars);
        let tokens: TokenStream = new CommonTokenStream(lexer);
        let parser = new TypeScriptParser(tokens);
        let errorStrategy = new DMErrorStrategy();
        this.tree = parser.program();
        this.visitor.visit(this.tree);
    }

    getParamNames(): string[] {
        throw new Error("Method not implemented.");
    }
    getReturnType(): string {
        throw new Error("Method not implemented.");
    }
    getExceptions(): string[] {
        throw new Error("Method not implemented.");
    }
    
}