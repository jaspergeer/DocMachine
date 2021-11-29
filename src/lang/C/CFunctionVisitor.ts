/*!
 * Copyright 2021 Jasper Geer. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */

import { FunctionData } from "../FunctionData";
import { CVisitor } from "../../antlr/C/CVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CompilationUnitContext, DeclaratorContext, DirectDeclaratorContext, ExternalDeclarationContext, FunctionDefinitionContext, ParameterDeclarationContext, ParameterListContext, ParameterTypeListContext, TranslationUnitContext } from "../../antlr/C/CParser";
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
     * Visit a compilation unit
     * @param ctx the current node in the parse tree
     * @returns data from a function definition subnode if it exists otherwise default result
     */
    visitCompilationUnit(ctx: CompilationUnitContext): FunctionData  {
        if (ctx.translationUnit()) {
            return this.visitTranslationUnit(ctx.translationUnit()!);
        }
        return this.defaultResult();
    }

    /**
     * Visit a translation unit
     * @param ctx the current node in the parse tree
     * @returns data from a function definition subnode if it exists otherwise default result
     */
    visitTranslationUnit (ctx: TranslationUnitContext): FunctionData {
        if (ctx.externalDeclaration()[0]) {
            return this.visitExternalDeclaration(ctx.externalDeclaration()[0]!);
        }
        return this.defaultResult();
    }

    /**
     * Visit an external declaration
     * @param ctx the current node in the parse tree
     * @returns data from a function definition subnode if it exists otherwise default result
     */
    visitExternalDeclaration (ctx: ExternalDeclarationContext): FunctionData {
        if (ctx.functionDefinition()) {
            return this.visitFunctionDefinition(ctx.functionDefinition()!);
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
        if (ctx.declarator()) {
            result = this.visit(ctx.declarator());
        }
        if (ctx.declarationSpecifiers()) {
            result.returnType = ctx.declarationSpecifiers()!.text;
            if (result.returnType === "void") {
                result.returnType = "";
            }
        }
        return result;
    }

    /**
     * Visit a declarator
     * @param ctx current node in the parse tree
     * @returns FunctionData containing parameter names if they exist oherwise default result
     */
    visitDeclarator(ctx: DeclaratorContext): FunctionData {
        if (ctx.directDeclarator()) {
            return this.visitDirectDeclarator(ctx.directDeclarator());
        }
        return this.defaultResult();
    };
    
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
                paramNames: [this.getFirstLeaf(ctx.declarator()!).text],
                returnType: "",
                exceptions: []
            };
        }
        return this.defaultResult();
    };

    getFirstLeaf(ctx: ParseTree): ParseTree {
        if (ctx.childCount > 0) {
            return this.getFirstLeaf(ctx.getChild(0));
        }
        return ctx;
    }
}