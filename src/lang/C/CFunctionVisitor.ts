/*!
 * Copyright 2021 Jasper Geer. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */

import { FunctionData } from "../FunctionData";
import { CVisitor } from "../../antlr/C/CVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CompilationUnitContext, DeclarationSpecifierContext, DeclaratorContext, DirectDeclaratorContext, ExternalDeclarationContext, FunctionDefinitionContext, ParameterDeclarationContext, ParameterListContext, ParameterTypeListContext, TranslationUnitContext } from "../../antlr/C/CParser";
import { ParseTree } from "antlr4ts/tree/ParseTree";

export class CFunctionVisitor extends AbstractParseTreeVisitor<FunctionData> implements CVisitor<FunctionData> {

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
     * Visit a compilation unit. This is the entry point into the parse tree.
     * @param ctx the current node in the parse tree
     * @returns data from a function definition subnode if it exists otherwise default result
     */
    visitCompilationUnit(ctx: CompilationUnitContext): FunctionData  {
        if (ctx.translationUnit()?.externalDeclaration()[0].functionDefinition()) {
            return this.visitFunctionDefinition(ctx.translationUnit()!.externalDeclaration()[0].functionDefinition()!);
        }
        return this.defaultResult();
    }

    /**
     * Visit a function definition and extract function data
     * @param ctx the current node in the parse tree
     * @returns FunctionData containing parameter names and return type of function
     */
    visitFunctionDefinition(ctx: FunctionDefinitionContext): FunctionData {
        console.log(ctx);
        let result: FunctionData = this.defaultResult();
        if (ctx.declarator().directDeclarator().parameterTypeList()?.parameterList()) {
            result = this.visitParameterList(ctx.declarator().directDeclarator().parameterTypeList()!.parameterList());
        /* special case for single pointer parameter */
        } else if (ctx.declarator().directDeclarator().pointer()) {
            result = this.visitDirectDeclarator(ctx.declarator()!.directDeclarator()!);
        }
        if (ctx.declarationSpecifiers()?.declarationSpecifier()) {
            console.log(ctx.declarationSpecifiers()?.declarationSpecifier());
            let declSpecCtx: DeclarationSpecifierContext[] = ctx.declarationSpecifiers()!.declarationSpecifier();
            let returnTypeCtx: DeclarationSpecifierContext | undefined;
            /* special case for single pointer parameter */
            if (declSpecCtx.length === 2 && result.paramNames.length === 1) {
                returnTypeCtx = declSpecCtx[declSpecCtx.length - 2];
            } else {
                returnTypeCtx = declSpecCtx[declSpecCtx.length - 1];
            }
            if (returnTypeCtx) {
                result.returnType = returnTypeCtx.text;
            }
            if (result.returnType === "void") {
                result.returnType = "";
            }
        }
        return result;
    }

    /**
     * Visit a direct declarator and extract function data
     * @param ctx the current node in the parse tree
     * @returns FunctionData containing parameter names of function
     */
    visitDirectDeclarator (ctx: DirectDeclaratorContext): FunctionData {
        if (ctx.childCount === 1) {
            return {
                paramNames: [ctx.text],
                returnType: "",
                exceptions: []
            };
        /* navigate down the parse tree until we reah the parameter name */
        } else if (ctx.directDeclarator()) {
            return this.visitDirectDeclarator(ctx.directDeclarator()!);
        } else if (ctx.declarator()?.directDeclarator()) {
            return this.visitDirectDeclarator(ctx.declarator()!.directDeclarator());
        }
        return this.defaultResult();
    }

    /**
     * Visit a parameter list and extract name of each parameter
     * @param ctx current node in parse tree
     * @returns FunctionData containing parameter names
     */
    visitParameterList(ctx: ParameterListContext): FunctionData {
        let result: FunctionData = this.defaultResult();
        for (let dcl of ctx.parameterDeclaration()) {
            let paramName: string | undefined = this.visitParameterDeclaration(dcl).paramNames.pop();
            if (paramName !== undefined) {
                result.paramNames.push(paramName);
            }
        }
        return result;
    }

    /**
     * Visit a parameter declaration and get the name of the parameter
     * @param ctx current node in parse tree
     * @returns FunctionData containing the name of this parameter
     */
    visitParameterDeclaration(ctx: ParameterDeclarationContext): FunctionData {
        if (ctx.declarator()?.directDeclarator()) {
            return {
                paramNames: this.visitDirectDeclarator(ctx.declarator()!.directDeclarator()).paramNames,
                returnType: "",
                exceptions: []
            };
        };
        return this.defaultResult();
    };
}