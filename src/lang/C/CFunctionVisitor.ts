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
        let result: FunctionData = this.defaultResult();
        if (ctx.declarator().directDeclarator()) {
            result = this.visitDirectDeclarator(ctx.declarator().directDeclarator());
        }
        if (ctx.declarationSpecifiers()?.declarationSpecifier()) {
            let returnTypeCtx: DeclarationSpecifierContext | undefined = ctx.declarationSpecifiers()!.declarationSpecifier().pop();
            if (returnTypeCtx) {
                result.returnType = returnTypeCtx.text;
            }
            console.log(ctx.declarationSpecifiers()?.toStringTree());
            if (result.returnType === "void") {
                result.returnType = "";
            }
        }
        return result;
    }

    visitDirectDeclarator (ctx: DirectDeclaratorContext): FunctionData {
        /* if we have a list of parameters or a complex parameter parse the list */
        if (ctx.parameterTypeList()) {
            return this.visitParameterTypeList(ctx.parameterTypeList()!);
        } else if (ctx.directDeclarator()) {
            /* if we have a single simple parameter get its name */
            if (ctx.directDeclarator()?.directDeclarator()) {
                return {
                    paramNames: [ctx.directDeclarator()!.text],
                    returnType: "",
                    exceptions: []
                };
            }
            /* if we have no parameters return no parameter names */
            return {
                paramNames: [],
                returnType: "",
                exceptions: []
            };
        }
        return this.defaultResult();
    }

    /**
     * Visit a parameter type list
     * @param ctx current node in parse tree
     * @returns FunctionData containing parameter names if they exist oherwise default result
     */
    visitParameterTypeList (ctx: ParameterTypeListContext): FunctionData {
        if (ctx.parameterList()) {
            return this.visitParameterList(ctx.parameterList());
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
            result.paramNames.push(this.visitParameterDeclaration(dcl).paramNames[0]);
        }
        return result;
    }

    /**
     * Visit a parameter declaration and get the name of the parameter
     * @param ctx current node in parse tree
     * @returns FunctionData containing the name of this parameter
     */
    visitParameterDeclaration(ctx: ParameterDeclarationContext): FunctionData {
        if (ctx.declarator()) {
            return {
                paramNames: [this.getLeftmostLeaf(ctx.declarator()!).text],
                returnType: "",
                exceptions: []
            };
        }
        return this.defaultResult();
    };

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