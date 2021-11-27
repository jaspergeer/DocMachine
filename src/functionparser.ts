import { CharStream } from 'antlr4ts';

export abstract class FunctionParser {

    chars: CharStream;

    constructor(chars: CharStream) {
        this.chars = chars;
    }

    abstract getParamNames: () => string[];

    abstract getReturnType: () => string;

    abstract getExceptions: () => string[];
}