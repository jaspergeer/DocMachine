import { FunctionData } from "../FunctionData";
import { CVisitor } from "./CVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { CompilationUnitContext, DeclaratorContext, DirectDeclaratorContext, ExternalDeclarationContext, FunctionDefinitionContext, ParameterDeclarationContext, ParameterListContext, ParameterTypeListContext, TranslationUnitContext } from "./CParser";

export class CFunctionVisitor extends AbstractParseTreeVisitor<FunctionData> implements CVisitor<FunctionData> {
    protected defaultResult(): FunctionData {
        return {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
    }

    visitCompilationUnit(ctx: CompilationUnitContext): FunctionData  {
        if (ctx.translationUnit()) {
            return this.visitTranslationUnit(ctx.translationUnit()!);
        }
        return this.defaultResult();
    }

    visitTranslationUnit (ctx: TranslationUnitContext): FunctionData {
        if (ctx.externalDeclaration()[0]) {
            return this.visitExternalDeclaration(ctx.externalDeclaration()[0]!);
        }
        return this.defaultResult();
    }

    visitExternalDeclaration (ctx: ExternalDeclarationContext): FunctionData {
        if (ctx.functionDefinition()) {
            return this.visitFunctionDefinition(ctx.functionDefinition()!);
        }
        return this.defaultResult();
    }

    visitFunctionDefinition(ctx: FunctionDefinitionContext): FunctionData {
        console.log();
        let result: FunctionData = {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
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

    visitDeclarator(ctx: DeclaratorContext): FunctionData {
        if (ctx.directDeclarator()) {
            return this.visitDirectDeclarator(ctx.directDeclarator());
        }
        return this.defaultResult();
    };

    visitDirectDeclarator (ctx: DirectDeclaratorContext): FunctionData {
        /* if we have a list of parameters, parse the list */
        if (ctx.parameterTypeList()) {
            return this.visitParameterTypeList(ctx.parameterTypeList()!);
        
        /* if we have a single parameter get its name */
        } else if (ctx.directDeclarator()) {
            return {
                paramNames: [ctx.directDeclarator()!.text],
                returnType: "",
                exceptions: []
            };
        }
        return this.defaultResult();
    }

    visitParameterTypeList (ctx: ParameterTypeListContext): FunctionData {
        if (ctx.parameterList()) {
            return this.visitParameterList(ctx.parameterList());
        }
        return this.defaultResult();
    }

    visitParameterList(ctx: ParameterListContext): FunctionData {
        let result: FunctionData = {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
        for (let dcl of ctx.parameterDeclaration()) {
            result.paramNames.push(this.visitParameterDeclaration(dcl).paramNames[0]);
        }
        return result;
    }

    visitParameterDeclaration(ctx: ParameterDeclarationContext): FunctionData {
        if (ctx.declarator()) {
            return {
                paramNames: [ctx.declarator()!.text],
                returnType: "",
                exceptions: []
            };
        }
        return this.defaultResult();
    };
}