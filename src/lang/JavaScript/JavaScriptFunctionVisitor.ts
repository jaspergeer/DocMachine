import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { JavaScriptParserVisitor } from "../../antlr/JavaScript/JavaScriptParserVisitor";
import { FunctionData } from "../FunctionData";

export class JavaScriptFunctionVisitor extends AbstractParseTreeVisitor<FunctionData> implements JavaScriptParserVisitor<FunctionData> {
    /**
     * Get the default result of navigating a parse tree with this vistior
     * @returns a FunctionData with empty initialized fields
     */
     protected defaultResult(): FunctionData {
        return {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
    }

    
}