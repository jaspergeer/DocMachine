import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { CallSignatureContext, FormalParameterListContext, FunctionDeclarationContext, FunctionExpressionDeclarationContext, InitializerContext, ParameterListContext, ProgramContext, SingleExpressionContext, VariableDeclarationContext, VariableDeclarationListContext } from "../../antlr/TypeScript/TypeScriptParser";
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

    /**
     * Visit a program. This is the entry point into the parse tree.
     * @param ctx the current node in the parse tree
     * @returns parameter names and return type of the first function definition encountered
     */
    visitProgram(ctx: ProgramContext): FunctionData {
        /* standard case for function declarations */
        if (ctx.sourceElements()?.sourceElement()[0].statement().functionDeclaration()) {
            return this.visitCallSignature(ctx.sourceElements()!.sourceElement()[0].statement().functionDeclaration()!.callSignature());
        /* special case for anonymous functions */
        } else if (ctx.sourceElements()?.sourceElement()[0].statement().variableStatement()?.variableDeclarationList()) {
            return this.visitVariableDeclarationList(ctx.sourceElements()!.sourceElement()[0].statement().variableStatement()!.variableDeclarationList()!)
        }
        return this.defaultResult();
    }

    /**
     * Visit a call signature and extract function data
     * @param ctx the current node in the parse tree
     * @returns parameter names and return type of function
     */
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

    /**
     * Visit a parameter list and extract parameter names
     * @param ctx current node in the parse tree
     * @returns parameter names of the function
     */
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

    /**
     * Visit a variable declaration list. This is the special case in which we parse an anonymous function.
     * @param ctx current node in the parse tree
     * @returns parameter names and return type of the first function definition encountered
     */
    visitVariableDeclarationList(ctx: VariableDeclarationListContext): FunctionData {
        let result: FunctionData = this.defaultResult();
        /* visit each variable declaration in the list and return the data from the first function declaration if it exists */
        for (let decl of ctx.variableDeclaration()) {
            if (decl.singleExpression().pop()?.functionExpressionDeclaration()) {
                result = this.visitFunctionExpressionDeclaration(decl.singleExpression().pop()!.functionExpressionDeclaration());
            }
            if (result !== this.defaultResult()) {
                return result;
            }
        }
        return result;
    }

    /**
     * Visit a function expression declaration and extract function data
     * @param ctx current node in the parse tree
     * @returns return type and parameter names of function
     */
    visitFunctionExpressionDeclaration(ctx: FunctionExpressionDeclarationContext): FunctionData {
        let result: FunctionData = {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
        if (ctx.formalParameterList()) {
            result.paramNames = this.visitFormalParameterList(ctx.formalParameterList()!).paramNames;
        }
        if (ctx.typeAnnotation()) {
            result.returnType = ctx.typeAnnotation()!.type_().text;
        }
        return result; 
    }

    /**
     * Visit a formal parameter list and extract parameter names
     * @param ctx current node in the parse tree
     * @returns parameter naemes of the function
     */
    visitFormalParameterList(ctx: FormalParameterListContext): FunctionData {
        let result: FunctionData = {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
        for (let param of ctx.formalParameterArg()) {
            result.paramNames.push(param.identifierOrKeyWord().text);
        }
        return result;
    }
}