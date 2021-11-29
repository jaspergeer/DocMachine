// Generated from src/antlr/JavaScript/JavaScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FunctionExpressionContext } from "./JavaScriptParser";
import { ClassExpressionContext } from "./JavaScriptParser";
import { MemberIndexExpressionContext } from "./JavaScriptParser";
import { MemberDotExpressionContext } from "./JavaScriptParser";
import { NewExpressionContext } from "./JavaScriptParser";
import { ArgumentsExpressionContext } from "./JavaScriptParser";
import { MetaExpressionContext } from "./JavaScriptParser";
import { PostIncrementExpressionContext } from "./JavaScriptParser";
import { PostDecreaseExpressionContext } from "./JavaScriptParser";
import { DeleteExpressionContext } from "./JavaScriptParser";
import { VoidExpressionContext } from "./JavaScriptParser";
import { TypeofExpressionContext } from "./JavaScriptParser";
import { PreIncrementExpressionContext } from "./JavaScriptParser";
import { PreDecreaseExpressionContext } from "./JavaScriptParser";
import { UnaryPlusExpressionContext } from "./JavaScriptParser";
import { UnaryMinusExpressionContext } from "./JavaScriptParser";
import { BitNotExpressionContext } from "./JavaScriptParser";
import { NotExpressionContext } from "./JavaScriptParser";
import { AwaitExpressionContext } from "./JavaScriptParser";
import { PowerExpressionContext } from "./JavaScriptParser";
import { MultiplicativeExpressionContext } from "./JavaScriptParser";
import { AdditiveExpressionContext } from "./JavaScriptParser";
import { CoalesceExpressionContext } from "./JavaScriptParser";
import { BitShiftExpressionContext } from "./JavaScriptParser";
import { RelationalExpressionContext } from "./JavaScriptParser";
import { InstanceofExpressionContext } from "./JavaScriptParser";
import { InExpressionContext } from "./JavaScriptParser";
import { EqualityExpressionContext } from "./JavaScriptParser";
import { BitAndExpressionContext } from "./JavaScriptParser";
import { BitXOrExpressionContext } from "./JavaScriptParser";
import { BitOrExpressionContext } from "./JavaScriptParser";
import { LogicalAndExpressionContext } from "./JavaScriptParser";
import { LogicalOrExpressionContext } from "./JavaScriptParser";
import { TernaryExpressionContext } from "./JavaScriptParser";
import { AssignmentExpressionContext } from "./JavaScriptParser";
import { AssignmentOperatorExpressionContext } from "./JavaScriptParser";
import { ImportExpressionContext } from "./JavaScriptParser";
import { TemplateStringExpressionContext } from "./JavaScriptParser";
import { YieldExpressionContext } from "./JavaScriptParser";
import { ThisExpressionContext } from "./JavaScriptParser";
import { IdentifierExpressionContext } from "./JavaScriptParser";
import { SuperExpressionContext } from "./JavaScriptParser";
import { LiteralExpressionContext } from "./JavaScriptParser";
import { ArrayLiteralExpressionContext } from "./JavaScriptParser";
import { ObjectLiteralExpressionContext } from "./JavaScriptParser";
import { ParenthesizedExpressionContext } from "./JavaScriptParser";
import { PropertyExpressionAssignmentContext } from "./JavaScriptParser";
import { ComputedPropertyExpressionAssignmentContext } from "./JavaScriptParser";
import { FunctionPropertyContext } from "./JavaScriptParser";
import { PropertyGetterContext } from "./JavaScriptParser";
import { PropertySetterContext } from "./JavaScriptParser";
import { PropertyShorthandContext } from "./JavaScriptParser";
import { DoStatementContext } from "./JavaScriptParser";
import { WhileStatementContext } from "./JavaScriptParser";
import { ForStatementContext } from "./JavaScriptParser";
import { ForInStatementContext } from "./JavaScriptParser";
import { ForOfStatementContext } from "./JavaScriptParser";
import { ExportDeclarationContext } from "./JavaScriptParser";
import { ExportDefaultDeclarationContext } from "./JavaScriptParser";
import { FunctionDeclContext } from "./JavaScriptParser";
import { AnonymousFunctionDeclContext } from "./JavaScriptParser";
import { ArrowFunctionContext } from "./JavaScriptParser";
import { ProgramContext } from "./JavaScriptParser";
import { SourceElementContext } from "./JavaScriptParser";
import { StatementContext } from "./JavaScriptParser";
import { BlockContext } from "./JavaScriptParser";
import { StatementListContext } from "./JavaScriptParser";
import { ImportStatementContext } from "./JavaScriptParser";
import { ImportFromBlockContext } from "./JavaScriptParser";
import { ModuleItemsContext } from "./JavaScriptParser";
import { ImportDefaultContext } from "./JavaScriptParser";
import { ImportNamespaceContext } from "./JavaScriptParser";
import { ImportFromContext } from "./JavaScriptParser";
import { AliasNameContext } from "./JavaScriptParser";
import { ExportStatementContext } from "./JavaScriptParser";
import { ExportFromBlockContext } from "./JavaScriptParser";
import { DeclarationContext } from "./JavaScriptParser";
import { VariableStatementContext } from "./JavaScriptParser";
import { VariableDeclarationListContext } from "./JavaScriptParser";
import { VariableDeclarationContext } from "./JavaScriptParser";
import { EmptyStatementContext } from "./JavaScriptParser";
import { ExpressionStatementContext } from "./JavaScriptParser";
import { IfStatementContext } from "./JavaScriptParser";
import { IterationStatementContext } from "./JavaScriptParser";
import { VarModifierContext } from "./JavaScriptParser";
import { ContinueStatementContext } from "./JavaScriptParser";
import { BreakStatementContext } from "./JavaScriptParser";
import { ReturnStatementContext } from "./JavaScriptParser";
import { YieldStatementContext } from "./JavaScriptParser";
import { WithStatementContext } from "./JavaScriptParser";
import { SwitchStatementContext } from "./JavaScriptParser";
import { CaseBlockContext } from "./JavaScriptParser";
import { CaseClausesContext } from "./JavaScriptParser";
import { CaseClauseContext } from "./JavaScriptParser";
import { DefaultClauseContext } from "./JavaScriptParser";
import { LabelledStatementContext } from "./JavaScriptParser";
import { ThrowStatementContext } from "./JavaScriptParser";
import { TryStatementContext } from "./JavaScriptParser";
import { CatchProductionContext } from "./JavaScriptParser";
import { FinallyProductionContext } from "./JavaScriptParser";
import { DebuggerStatementContext } from "./JavaScriptParser";
import { FunctionDeclarationContext } from "./JavaScriptParser";
import { ClassDeclarationContext } from "./JavaScriptParser";
import { ClassTailContext } from "./JavaScriptParser";
import { ClassElementContext } from "./JavaScriptParser";
import { MethodDefinitionContext } from "./JavaScriptParser";
import { FormalParameterListContext } from "./JavaScriptParser";
import { FormalParameterArgContext } from "./JavaScriptParser";
import { LastFormalParameterArgContext } from "./JavaScriptParser";
import { FunctionBodyContext } from "./JavaScriptParser";
import { SourceElementsContext } from "./JavaScriptParser";
import { ArrayLiteralContext } from "./JavaScriptParser";
import { ElementListContext } from "./JavaScriptParser";
import { ArrayElementContext } from "./JavaScriptParser";
import { PropertyAssignmentContext } from "./JavaScriptParser";
import { PropertyNameContext } from "./JavaScriptParser";
import { ArgumentsContext } from "./JavaScriptParser";
import { ArgumentContext } from "./JavaScriptParser";
import { ExpressionSequenceContext } from "./JavaScriptParser";
import { SingleExpressionContext } from "./JavaScriptParser";
import { AssignableContext } from "./JavaScriptParser";
import { ObjectLiteralContext } from "./JavaScriptParser";
import { AnonymousFunctionContext } from "./JavaScriptParser";
import { ArrowFunctionParametersContext } from "./JavaScriptParser";
import { ArrowFunctionBodyContext } from "./JavaScriptParser";
import { AssignmentOperatorContext } from "./JavaScriptParser";
import { LiteralContext } from "./JavaScriptParser";
import { TemplateStringLiteralContext } from "./JavaScriptParser";
import { TemplateStringAtomContext } from "./JavaScriptParser";
import { NumericLiteralContext } from "./JavaScriptParser";
import { BigintLiteralContext } from "./JavaScriptParser";
import { GetterContext } from "./JavaScriptParser";
import { SetterContext } from "./JavaScriptParser";
import { IdentifierNameContext } from "./JavaScriptParser";
import { IdentifierContext } from "./JavaScriptParser";
import { ReservedWordContext } from "./JavaScriptParser";
import { KeywordContext } from "./JavaScriptParser";
import { Let_Context } from "./JavaScriptParser";
import { EosContext } from "./JavaScriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JavaScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JavaScriptParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `FunctionExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpression?: (ctx: FunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ClassExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassExpression?: (ctx: ClassExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDotExpression?: (ctx: MemberDotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NewExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewExpression?: (ctx: NewExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentsExpression?: (ctx: ArgumentsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MetaExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetaExpression?: (ctx: MetaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `DeleteExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteExpression?: (ctx: DeleteExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `VoidExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoidExpression?: (ctx: VoidExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeofExpression?: (ctx: TypeofExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitNotExpression?: (ctx: BitNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AwaitExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAwaitExpression?: (ctx: AwaitExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PowerExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExpression?: (ctx: PowerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CoalesceExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoalesceExpression?: (ctx: CoalesceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitShiftExpression?: (ctx: BitShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceofExpression?: (ctx: InstanceofExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `InExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInExpression?: (ctx: InExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAndExpression?: (ctx: BitAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitXOrExpression?: (ctx: BitXOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrExpression?: (ctx: BitOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ImportExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportExpression?: (ctx: ImportExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TemplateStringExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateStringExpression?: (ctx: TemplateStringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `YieldExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldExpression?: (ctx: YieldExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ThisExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpression?: (ctx: ThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SuperExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperExpression?: (ctx: SuperExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ObjectLiteralExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PropertyExpressionAssignment`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyExpressionAssignment?: (ctx: PropertyExpressionAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `ComputedPropertyExpressionAssignment`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputedPropertyExpressionAssignment?: (ctx: ComputedPropertyExpressionAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionProperty`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionProperty?: (ctx: FunctionPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by the `PropertyGetter`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyGetter?: (ctx: PropertyGetterContext) => Result;

	/**
	 * Visit a parse tree produced by the `PropertySetter`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertySetter?: (ctx: PropertySetterContext) => Result;

	/**
	 * Visit a parse tree produced by the `PropertyShorthand`
	 * labeled alternative in `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyShorthand?: (ctx: PropertyShorthandContext) => Result;

	/**
	 * Visit a parse tree produced by the `DoStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `WhileStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForInStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInStatement?: (ctx: ForInStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForOfStatement`
	 * labeled alternative in `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForOfStatement?: (ctx: ForOfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExportDeclaration`
	 * labeled alternative in `JavaScriptParser.exportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportDeclaration?: (ctx: ExportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExportDefaultDeclaration`
	 * labeled alternative in `JavaScriptParser.exportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportDefaultDeclaration?: (ctx: ExportDefaultDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionDecl`
	 * labeled alternative in `JavaScriptParser.anonymousFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by the `AnonymousFunctionDecl`
	 * labeled alternative in `JavaScriptParser.anonymousFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousFunctionDecl?: (ctx: AnonymousFunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrowFunction`
	 * labeled alternative in `JavaScriptParser.anonymousFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowFunction?: (ctx: ArrowFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceElement?: (ctx: SourceElementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.importFromBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportFromBlock?: (ctx: ImportFromBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.moduleItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleItems?: (ctx: ModuleItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.importDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDefault?: (ctx: ImportDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.importNamespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportNamespace?: (ctx: ImportNamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.importFrom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportFrom?: (ctx: ImportFromContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.aliasName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasName?: (ctx: AliasNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.exportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportStatement?: (ctx: ExportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.exportFromBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportFromBlock?: (ctx: ExportFromBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.variableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableStatement?: (ctx: VariableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterationStatement?: (ctx: IterationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.varModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarModifier?: (ctx: VarModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.yieldStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStatement?: (ctx: YieldStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.withStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithStatement?: (ctx: WithStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.caseBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseBlock?: (ctx: CaseBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.caseClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseClauses?: (ctx: CaseClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.caseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseClause?: (ctx: CaseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.defaultClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultClause?: (ctx: DefaultClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.labelledStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelledStatement?: (ctx: LabelledStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.throwStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.catchProduction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchProduction?: (ctx: CatchProductionContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.finallyProduction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyProduction?: (ctx: FinallyProductionContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.debuggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDebuggerStatement?: (ctx: DebuggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.classTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassTail?: (ctx: ClassTailContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.classElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassElement?: (ctx: ClassElementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.methodDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDefinition?: (ctx: MethodDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.formalParameterArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterArg?: (ctx: FormalParameterArgContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.lastFormalParameterArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLastFormalParameterArg?: (ctx: LastFormalParameterArgContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.sourceElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceElements?: (ctx: SourceElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.elementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementList?: (ctx: ElementListContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.arrayElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayElement?: (ctx: ArrayElementContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyAssignment?: (ctx: PropertyAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.propertyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyName?: (ctx: PropertyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.expressionSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSequence?: (ctx: ExpressionSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.assignable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignable?: (ctx: AssignableContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.objectLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteral?: (ctx: ObjectLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.anonymousFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousFunction?: (ctx: AnonymousFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.arrowFunctionParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowFunctionParameters?: (ctx: ArrowFunctionParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.arrowFunctionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowFunctionBody?: (ctx: ArrowFunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.templateStringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateStringLiteral?: (ctx: TemplateStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.templateStringAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateStringAtom?: (ctx: TemplateStringAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.bigintLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBigintLiteral?: (ctx: BigintLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.getter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter?: (ctx: GetterContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.setter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter?: (ctx: SetterContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.identifierName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierName?: (ctx: IdentifierNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.reservedWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedWord?: (ctx: ReservedWordContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.let_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLet_?: (ctx: Let_Context) => Result;

	/**
	 * Visit a parse tree produced by `JavaScriptParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;
}

