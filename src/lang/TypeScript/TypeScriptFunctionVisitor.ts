import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { FunctionDeclarationContext, ProgramContext, SourceElementsContext } from "../../antlr/TypeScript/TypeScriptParser";
import { TypeScriptParserVisitor } from "../../antlr/TypeScript/TypeScriptParserVisitor";
import { FunctionData } from "../FunctionData";

export class TypeScriptFunctionVisitor extends AbstractParseTreeVisitor<FunctionData> implements TypeScriptParserVisitor<FunctionData> {
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

    visitProgram(ctx: ProgramContext): FunctionData {
        if (ctx.sourceElements()?.sourceElement()[0].statement().functionDeclaration()) {
            return this.visitFunctionDeclaration(ctx.sourceElements()!.sourceElement()[0].statement().functionDeclaration()!);
        }
        return this.defaultResult();
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext): FunctionData {

    }
}