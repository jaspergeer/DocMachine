import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { FunctionData } from "../FunctionData";
import { CVisitor } from "./CVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { CompilationUnitContext, DeclaratorContext, DirectDeclaratorContext, ExternalDeclarationContext, FunctionDefinitionContext, ParameterDeclarationContext, ParameterTypeListContext, TranslationUnitContext } from "./CParser";

export class CFunctionVisitor extends AbstractParseTreeVisitor<FunctionData> implements CVisitor<FunctionData> {
    protected defaultResult(): FunctionData {
        return {
            paramNames: [],
            returnType: "",
            exceptions: []
        };
    }

    visitFunctionDefinition(ctx: FunctionDefinitionContext): FunctionData {
        if (ctx.declarator()) {
            this.visit(ctx.declarator());
        }
        return {
            paramNames: ["snake"],
            returnType: "void",
            exceptions: ["boo"]
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

    visitDeclarator(ctx: DeclaratorContext): FunctionData {
        if (ctx.directDeclarator()) {
            return this.visitDirectDeclarator(ctx.directDeclarator());
        }
        return this.defaultResult();
    };

    visitDirectDeclarator (ctx: DirectDeclaratorContext): FunctionData {
        if (ctx.parameterTypeList()) {
            return this.visitParameterTypeList(ctx.parameterTypeList()!);
        }
        return this.defaultResult();
    }

    visitParameterTypeList (ctx: ParameterTypeListContext): FunctionData {
        console.log(ctx.text);
        return this.defaultResult();
    }
}