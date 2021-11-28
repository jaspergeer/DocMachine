import { CharStream } from 'antlr4ts';

export interface FunctionParserConstructor {
    new (chars: CharStream): FunctionParser;
}

export interface FunctionParser {

    /**
     * @returns names of function parameters in order
     */
    getParamNames(): string[];

    /**
     * @returns return type of function
     */
    getReturnType(): string;

    /**
     * @returns exception types thrown in function in order
     */
    getExceptions(): string[];
}