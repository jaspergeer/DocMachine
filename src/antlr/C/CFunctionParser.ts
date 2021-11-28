import { ANTLRErrorListener, CharStream, CommonTokenStream, NoViableAltException } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { FunctionParser } from "../../FunctionParser";
import { DMErrorStrategy } from "../DMErrorStrategy";
import { FunctionData } from "../FunctionData";
import { CFunctionVisitor } from "./CFunctionVisitor";
import { CLexer } from "./CLexer";
import { CParser } from "./CParser";

export class CFunctionParser implements FunctionParser {
    private tree: ParseTree | null;
    private visitor: CFunctionVisitor;
    private paramNames: string[];
    private returnType: string;
    private exceptions: string[];

    constructor(chars: CharStream) {
        this.visitor = new CFunctionVisitor();
        let lexer = new CLexer(chars);
        let tokens = new CommonTokenStream(lexer);
        let parser = new CParser(tokens);
        let errorStrategy = new DMErrorStrategy();
        parser.errorHandler = errorStrategy;
        if (errorStrategy.foundInvalidText()) {
            this.tree = null;
            this.paramNames = [];
            this.returnType = "";
            this.exceptions = [];
        } else {
            this.tree = parser.compilationUnit();
            let result: FunctionData = this.visitor.visit(this.tree);
            this.paramNames = result.paramNames;
            this.returnType = result.returnType;
            this.exceptions = result.exceptions;
        }
    }
    getParamNames(): string[] {
        return this.paramNames;
    }
    getReturnType(): string {
        return this.returnType;
    }
    getExceptions(): string[] {
        return this.exceptions;
    }
    
}