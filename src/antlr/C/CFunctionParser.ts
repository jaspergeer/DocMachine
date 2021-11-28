import { CharStream, CharStreams, CommonTokenStream, NoViableAltException } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { EOF } from "dns";
import { FunctionParser } from "../../FunctionParser";
import { DMErrorStrategy } from "../DMErrorStrategy";
import { FunctionData } from "../FunctionData";
import { CFunctionVisitor } from "./CFunctionVisitor";
import { CLexer } from "./CLexer";
import { CParser } from "./CParser";

export class CFunctionParser implements FunctionParser {
    private tree: ParseTree | null = null;
    private visitor: CFunctionVisitor;
    private paramNames: string[] = [];
    private returnType: string = "";
    private exceptions: string[] = [];

    constructor(chars: CharStream) {
        this.visitor = new CFunctionVisitor();
        let thisChar: number = chars.LA(1);
        let funcStr: string = "";
        /* don't parse if this is a comment or incorrectly formatted */
        if (thisChar === " ".charCodeAt(0) || thisChar === "/".charCodeAt(0) || thisChar === "\n".charCodeAt(0)) {
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
        chars = CharStreams.fromString(funcStr);
        let lexer = new CLexer(chars);
        let tokens = new CommonTokenStream(lexer);
        let parser = new CParser(tokens);
        let errorStrategy = new DMErrorStrategy();
        parser.errorHandler = errorStrategy;
        if (!errorStrategy.foundInvalidText()) {
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