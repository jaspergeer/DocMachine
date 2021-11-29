import { FunctionParser } from "../FunctionParser";

export class JavaScriptFunctionParser implements FunctionParser {
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