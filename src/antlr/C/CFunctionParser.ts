import { CharStream, CommonTokenStream } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { FunctionParser } from "../../FunctionParser";
import { CFunctionVisitor } from "./CFunctionVisitor";
import { CLexer } from "./CLexer";
import { CParser, FunctionDefinitionContext } from "./CParser";
import { CVisitor } from "./CVisitor";

export class CFunctionParser implements FunctionParser {
    private chars: CharStream;
    private lexer: CLexer;
    private tokens: CommonTokenStream;
    private parser: CParser;
    private visitor: CFunctionVisitor;
    private tree: ParseTree;

    constructor(chars: CharStream) {
        this.chars = chars;
        this.lexer = new CLexer(chars);
        this.tokens = new CommonTokenStream(this.lexer);
        this.parser = new CParser(this.tokens);
        this.visitor = new CFunctionVisitor();
        this.tree = this.parser.compilationUnit();
    }
    getParamNames(): string[] {
        return this.visitor.visit(this.tree).paramNames;
    }
    getReturnType(): string {
        let result = this.visitor.visit(this.tree);
        return result.returnType;
    }
    getExceptions(): string[] {
        return this.visitor.visit(this.tree).exceptions;
    }
    
}