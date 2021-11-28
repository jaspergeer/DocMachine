import { CharStream } from "antlr4ts";
import { FunctionParser } from "../../FunctionParser";

export class CFunctionParser implements FunctionParser {
    private chars: CharStream;

    constructor(chars: CharStream) {
        this.chars = chars;
    }
    getParamNames(): string[] {
        return ["param"];
    }
    getReturnType(): string {
        return "void";
    }
    getExceptions(): string[] {
        return ["except"];
    }
    
}