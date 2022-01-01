import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { CallSignatureContext, FunctionDeclarationContext, ParameterListContext, ProgramContext } from "../../antlr/TypeScript/TypeScriptParser";
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
        console.log(ctx);
        if (ctx.sourceElements()?.sourceElement()[0].statement().functionDeclaration()) {
            return this.visitCallSignature(ctx.sourceElements()!.sourceElement()[0].statement().functionDeclaration()!.callSignature());
        }
        return this.defaultResult();
    }

    visitCallSignature(ctx: CallSignatureContext):FunctionData {
        let result: FunctionData = {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
        if (ctx.parameterList()) {
            result.paramNames = this.visitParameterList(ctx.parameterList()!).paramNames;
        }
        if (ctx.typeAnnotation()) {
            result.returnType = ctx.typeAnnotation()!.type_().text;
        }
        return result;
    }

    visitParameterList(ctx: ParameterListContext): FunctionData {
        let result: FunctionData = {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
        for (let param of ctx.parameter()) {
            if (param.requiredParameter()) {
                result.paramNames.push(this.getLeftmostLeaf(param.requiredParameter()!).text);
            } else if(param.optionalParameter()) {
                result.paramNames.push(this.getLeftmostLeaf(param.optionalParameter()!).text);
            }
        }
        return result;
    }

    /**
     * Get the leftmost leaf of a given parse tree
     * @param ctx parse tree
     * @returns leftmost leaf of parse tree
     */
    getLeftmostLeaf(ctx: ParseTree): ParseTree {
        if (ctx.childCount > 0) {
            return this.getLeftmostLeaf(ctx.getChild(0));
        }
        return ctx;
    }
}