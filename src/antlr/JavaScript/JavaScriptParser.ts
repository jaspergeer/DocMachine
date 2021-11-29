// Generated from src/antlr/JavaScript/JavaScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JavaScriptParserListener } from "./JavaScriptParserListener";
import { JavaScriptParserVisitor } from "./JavaScriptParserVisitor";


export class JavaScriptParser extends JavaScriptParserBase {
	public static readonly HashBangLine = 1;
	public static readonly MultiLineComment = 2;
	public static readonly SingleLineComment = 3;
	public static readonly RegularExpressionLiteral = 4;
	public static readonly OpenBracket = 5;
	public static readonly CloseBracket = 6;
	public static readonly OpenParen = 7;
	public static readonly CloseParen = 8;
	public static readonly OpenBrace = 9;
	public static readonly TemplateCloseBrace = 10;
	public static readonly CloseBrace = 11;
	public static readonly SemiColon = 12;
	public static readonly Comma = 13;
	public static readonly Assign = 14;
	public static readonly QuestionMark = 15;
	public static readonly Colon = 16;
	public static readonly Ellipsis = 17;
	public static readonly Dot = 18;
	public static readonly PlusPlus = 19;
	public static readonly MinusMinus = 20;
	public static readonly Plus = 21;
	public static readonly Minus = 22;
	public static readonly BitNot = 23;
	public static readonly Not = 24;
	public static readonly Multiply = 25;
	public static readonly Divide = 26;
	public static readonly Modulus = 27;
	public static readonly Power = 28;
	public static readonly NullCoalesce = 29;
	public static readonly Hashtag = 30;
	public static readonly RightShiftArithmetic = 31;
	public static readonly LeftShiftArithmetic = 32;
	public static readonly RightShiftLogical = 33;
	public static readonly LessThan = 34;
	public static readonly MoreThan = 35;
	public static readonly LessThanEquals = 36;
	public static readonly GreaterThanEquals = 37;
	public static readonly Equals_ = 38;
	public static readonly NotEquals = 39;
	public static readonly IdentityEquals = 40;
	public static readonly IdentityNotEquals = 41;
	public static readonly BitAnd = 42;
	public static readonly BitXOr = 43;
	public static readonly BitOr = 44;
	public static readonly And = 45;
	public static readonly Or = 46;
	public static readonly MultiplyAssign = 47;
	public static readonly DivideAssign = 48;
	public static readonly ModulusAssign = 49;
	public static readonly PlusAssign = 50;
	public static readonly MinusAssign = 51;
	public static readonly LeftShiftArithmeticAssign = 52;
	public static readonly RightShiftArithmeticAssign = 53;
	public static readonly RightShiftLogicalAssign = 54;
	public static readonly BitAndAssign = 55;
	public static readonly BitXorAssign = 56;
	public static readonly BitOrAssign = 57;
	public static readonly PowerAssign = 58;
	public static readonly ARROW = 59;
	public static readonly NullLiteral = 60;
	public static readonly BooleanLiteral = 61;
	public static readonly DecimalLiteral = 62;
	public static readonly HexIntegerLiteral = 63;
	public static readonly OctalIntegerLiteral = 64;
	public static readonly OctalIntegerLiteral2 = 65;
	public static readonly BinaryIntegerLiteral = 66;
	public static readonly BigHexIntegerLiteral = 67;
	public static readonly BigOctalIntegerLiteral = 68;
	public static readonly BigBinaryIntegerLiteral = 69;
	public static readonly BigDecimalIntegerLiteral = 70;
	public static readonly Break = 71;
	public static readonly Do = 72;
	public static readonly Instanceof = 73;
	public static readonly Typeof = 74;
	public static readonly Case = 75;
	public static readonly Else = 76;
	public static readonly New = 77;
	public static readonly Var = 78;
	public static readonly Catch = 79;
	public static readonly Finally = 80;
	public static readonly Return = 81;
	public static readonly Void = 82;
	public static readonly Continue = 83;
	public static readonly For = 84;
	public static readonly Switch = 85;
	public static readonly While = 86;
	public static readonly Debugger = 87;
	public static readonly Function_ = 88;
	public static readonly This = 89;
	public static readonly With = 90;
	public static readonly Default = 91;
	public static readonly If = 92;
	public static readonly Throw = 93;
	public static readonly Delete = 94;
	public static readonly In = 95;
	public static readonly Try = 96;
	public static readonly As = 97;
	public static readonly From = 98;
	public static readonly Class = 99;
	public static readonly Enum = 100;
	public static readonly Extends = 101;
	public static readonly Super = 102;
	public static readonly Const = 103;
	public static readonly Export = 104;
	public static readonly Import = 105;
	public static readonly Async = 106;
	public static readonly Await = 107;
	public static readonly Implements = 108;
	public static readonly StrictLet = 109;
	public static readonly NonStrictLet = 110;
	public static readonly Private = 111;
	public static readonly Public = 112;
	public static readonly Interface = 113;
	public static readonly Package = 114;
	public static readonly Protected = 115;
	public static readonly Static = 116;
	public static readonly Yield = 117;
	public static readonly Identifier = 118;
	public static readonly StringLiteral = 119;
	public static readonly BackTick = 120;
	public static readonly WhiteSpaces = 121;
	public static readonly LineTerminator = 122;
	public static readonly HtmlComment = 123;
	public static readonly CDataComment = 124;
	public static readonly UnexpectedCharacter = 125;
	public static readonly TemplateStringStartExpression = 126;
	public static readonly TemplateStringAtom = 127;
	public static readonly RULE_program = 0;
	public static readonly RULE_sourceElement = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_statementList = 4;
	public static readonly RULE_importStatement = 5;
	public static readonly RULE_importFromBlock = 6;
	public static readonly RULE_moduleItems = 7;
	public static readonly RULE_importDefault = 8;
	public static readonly RULE_importNamespace = 9;
	public static readonly RULE_importFrom = 10;
	public static readonly RULE_aliasName = 11;
	public static readonly RULE_exportStatement = 12;
	public static readonly RULE_exportFromBlock = 13;
	public static readonly RULE_declaration = 14;
	public static readonly RULE_variableStatement = 15;
	public static readonly RULE_variableDeclarationList = 16;
	public static readonly RULE_variableDeclaration = 17;
	public static readonly RULE_emptyStatement = 18;
	public static readonly RULE_expressionStatement = 19;
	public static readonly RULE_ifStatement = 20;
	public static readonly RULE_iterationStatement = 21;
	public static readonly RULE_varModifier = 22;
	public static readonly RULE_continueStatement = 23;
	public static readonly RULE_breakStatement = 24;
	public static readonly RULE_returnStatement = 25;
	public static readonly RULE_yieldStatement = 26;
	public static readonly RULE_withStatement = 27;
	public static readonly RULE_switchStatement = 28;
	public static readonly RULE_caseBlock = 29;
	public static readonly RULE_caseClauses = 30;
	public static readonly RULE_caseClause = 31;
	public static readonly RULE_defaultClause = 32;
	public static readonly RULE_labelledStatement = 33;
	public static readonly RULE_throwStatement = 34;
	public static readonly RULE_tryStatement = 35;
	public static readonly RULE_catchProduction = 36;
	public static readonly RULE_finallyProduction = 37;
	public static readonly RULE_debuggerStatement = 38;
	public static readonly RULE_functionDeclaration = 39;
	public static readonly RULE_classDeclaration = 40;
	public static readonly RULE_classTail = 41;
	public static readonly RULE_classElement = 42;
	public static readonly RULE_methodDefinition = 43;
	public static readonly RULE_formalParameterList = 44;
	public static readonly RULE_formalParameterArg = 45;
	public static readonly RULE_lastFormalParameterArg = 46;
	public static readonly RULE_functionBody = 47;
	public static readonly RULE_sourceElements = 48;
	public static readonly RULE_arrayLiteral = 49;
	public static readonly RULE_elementList = 50;
	public static readonly RULE_arrayElement = 51;
	public static readonly RULE_propertyAssignment = 52;
	public static readonly RULE_propertyName = 53;
	public static readonly RULE_arguments = 54;
	public static readonly RULE_argument = 55;
	public static readonly RULE_expressionSequence = 56;
	public static readonly RULE_singleExpression = 57;
	public static readonly RULE_assignable = 58;
	public static readonly RULE_objectLiteral = 59;
	public static readonly RULE_anonymousFunction = 60;
	public static readonly RULE_arrowFunctionParameters = 61;
	public static readonly RULE_arrowFunctionBody = 62;
	public static readonly RULE_assignmentOperator = 63;
	public static readonly RULE_literal = 64;
	public static readonly RULE_templateStringLiteral = 65;
	public static readonly RULE_templateStringAtom = 66;
	public static readonly RULE_numericLiteral = 67;
	public static readonly RULE_bigintLiteral = 68;
	public static readonly RULE_getter = 69;
	public static readonly RULE_setter = 70;
	public static readonly RULE_identifierName = 71;
	public static readonly RULE_identifier = 72;
	public static readonly RULE_reservedWord = 73;
	public static readonly RULE_keyword = 74;
	public static readonly RULE_let_ = 75;
	public static readonly RULE_eos = 76;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "sourceElement", "statement", "block", "statementList", "importStatement", 
		"importFromBlock", "moduleItems", "importDefault", "importNamespace", 
		"importFrom", "aliasName", "exportStatement", "exportFromBlock", "declaration", 
		"variableStatement", "variableDeclarationList", "variableDeclaration", 
		"emptyStatement", "expressionStatement", "ifStatement", "iterationStatement", 
		"varModifier", "continueStatement", "breakStatement", "returnStatement", 
		"yieldStatement", "withStatement", "switchStatement", "caseBlock", "caseClauses", 
		"caseClause", "defaultClause", "labelledStatement", "throwStatement", 
		"tryStatement", "catchProduction", "finallyProduction", "debuggerStatement", 
		"functionDeclaration", "classDeclaration", "classTail", "classElement", 
		"methodDefinition", "formalParameterList", "formalParameterArg", "lastFormalParameterArg", 
		"functionBody", "sourceElements", "arrayLiteral", "elementList", "arrayElement", 
		"propertyAssignment", "propertyName", "arguments", "argument", "expressionSequence", 
		"singleExpression", "assignable", "objectLiteral", "anonymousFunction", 
		"arrowFunctionParameters", "arrowFunctionBody", "assignmentOperator", 
		"literal", "templateStringLiteral", "templateStringAtom", "numericLiteral", 
		"bigintLiteral", "getter", "setter", "identifierName", "identifier", "reservedWord", 
		"keyword", "let_", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'['", "']'", "'('", 
		"')'", "'{'", undefined, "'}'", "';'", "','", "'='", "'?'", "':'", "'...'", 
		"'.'", "'++'", "'--'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", 
		"'**'", "'??'", "'#'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'", "'<='", 
		"'>='", "'=='", "'!='", "'==='", "'!=='", "'&'", "'^'", "'|'", "'&&'", 
		"'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", 
		"'&='", "'^='", "'|='", "'**='", "'=>'", "'null'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'break'", "'do'", "'instanceof'", "'typeof'", "'case'", "'else'", 
		"'new'", "'var'", "'catch'", "'finally'", "'return'", "'void'", "'continue'", 
		"'for'", "'switch'", "'while'", "'debugger'", "'function'", "'this'", 
		"'with'", "'default'", "'if'", "'throw'", "'delete'", "'in'", "'try'", 
		"'as'", "'from'", "'class'", "'enum'", "'extends'", "'super'", "'const'", 
		"'export'", "'import'", "'async'", "'await'", "'implements'", undefined, 
		undefined, "'private'", "'public'", "'interface'", "'package'", "'protected'", 
		"'static'", "'yield'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'${'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HashBangLine", "MultiLineComment", "SingleLineComment", "RegularExpressionLiteral", 
		"OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
		"TemplateCloseBrace", "CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", 
		"Colon", "Ellipsis", "Dot", "PlusPlus", "MinusMinus", "Plus", "Minus", 
		"BitNot", "Not", "Multiply", "Divide", "Modulus", "Power", "NullCoalesce", 
		"Hashtag", "RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical", 
		"LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals_", 
		"NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd", "BitXOr", 
		"BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
		"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
		"PowerAssign", "ARROW", "NullLiteral", "BooleanLiteral", "DecimalLiteral", 
		"HexIntegerLiteral", "OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
		"BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", 
		"BigDecimalIntegerLiteral", "Break", "Do", "Instanceof", "Typeof", "Case", 
		"Else", "New", "Var", "Catch", "Finally", "Return", "Void", "Continue", 
		"For", "Switch", "While", "Debugger", "Function_", "This", "With", "Default", 
		"If", "Throw", "Delete", "In", "Try", "As", "From", "Class", "Enum", "Extends", 
		"Super", "Const", "Export", "Import", "Async", "Await", "Implements", 
		"StrictLet", "NonStrictLet", "Private", "Public", "Interface", "Package", 
		"Protected", "Static", "Yield", "Identifier", "StringLiteral", "BackTick", 
		"WhiteSpaces", "LineTerminator", "HtmlComment", "CDataComment", "UnexpectedCharacter", 
		"TemplateStringStartExpression", "TemplateStringAtom",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaScriptParser._LITERAL_NAMES, JavaScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JavaScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JavaScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return JavaScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JavaScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JavaScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JavaScriptParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 154;
				this.match(JavaScriptParser.HashBangLine);
				}
				break;
			}
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 157;
				this.sourceElements();
				}
				break;
			}
			this.state = 160;
			this.match(JavaScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElement(): SourceElementContext {
		let _localctx: SourceElementContext = new SourceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavaScriptParser.RULE_sourceElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JavaScriptParser.RULE_statement);
		try {
			this.state = 184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 164;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 165;
				this.variableStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 166;
				this.importStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 167;
				this.exportStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 168;
				this.emptyStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 169;
				this.classDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 170;
				this.expressionStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 171;
				this.ifStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 172;
				this.iterationStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 173;
				this.continueStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 174;
				this.breakStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 175;
				this.returnStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 176;
				this.yieldStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 177;
				this.withStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 178;
				this.labelledStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 179;
				this.switchStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 180;
				this.throwStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 181;
				this.tryStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 182;
				this.debuggerStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 183;
				this.functionDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JavaScriptParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 187;
				this.statementList();
				}
				break;
			}
			this.state = 190;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavaScriptParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 192;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavaScriptParser.RULE_importStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(JavaScriptParser.Import);
			this.state = 198;
			this.importFromBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importFromBlock(): ImportFromBlockContext {
		let _localctx: ImportFromBlockContext = new ImportFromBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JavaScriptParser.RULE_importFromBlock);
		try {
			this.state = 212;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.OpenBrace:
			case JavaScriptParser.Multiply:
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function_:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 200;
					this.importDefault();
					}
					break;
				}
				this.state = 205;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaScriptParser.Multiply:
				case JavaScriptParser.NullLiteral:
				case JavaScriptParser.BooleanLiteral:
				case JavaScriptParser.Break:
				case JavaScriptParser.Do:
				case JavaScriptParser.Instanceof:
				case JavaScriptParser.Typeof:
				case JavaScriptParser.Case:
				case JavaScriptParser.Else:
				case JavaScriptParser.New:
				case JavaScriptParser.Var:
				case JavaScriptParser.Catch:
				case JavaScriptParser.Finally:
				case JavaScriptParser.Return:
				case JavaScriptParser.Void:
				case JavaScriptParser.Continue:
				case JavaScriptParser.For:
				case JavaScriptParser.Switch:
				case JavaScriptParser.While:
				case JavaScriptParser.Debugger:
				case JavaScriptParser.Function_:
				case JavaScriptParser.This:
				case JavaScriptParser.With:
				case JavaScriptParser.Default:
				case JavaScriptParser.If:
				case JavaScriptParser.Throw:
				case JavaScriptParser.Delete:
				case JavaScriptParser.In:
				case JavaScriptParser.Try:
				case JavaScriptParser.As:
				case JavaScriptParser.From:
				case JavaScriptParser.Class:
				case JavaScriptParser.Enum:
				case JavaScriptParser.Extends:
				case JavaScriptParser.Super:
				case JavaScriptParser.Const:
				case JavaScriptParser.Export:
				case JavaScriptParser.Import:
				case JavaScriptParser.Async:
				case JavaScriptParser.Await:
				case JavaScriptParser.Implements:
				case JavaScriptParser.StrictLet:
				case JavaScriptParser.NonStrictLet:
				case JavaScriptParser.Private:
				case JavaScriptParser.Public:
				case JavaScriptParser.Interface:
				case JavaScriptParser.Package:
				case JavaScriptParser.Protected:
				case JavaScriptParser.Static:
				case JavaScriptParser.Yield:
				case JavaScriptParser.Identifier:
					{
					this.state = 203;
					this.importNamespace();
					}
					break;
				case JavaScriptParser.OpenBrace:
					{
					this.state = 204;
					this.moduleItems();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 207;
				this.importFrom();
				this.state = 208;
				this.eos();
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 210;
				this.match(JavaScriptParser.StringLiteral);
				this.state = 211;
				this.eos();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleItems(): ModuleItemsContext {
		let _localctx: ModuleItemsContext = new ModuleItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JavaScriptParser.RULE_moduleItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 220;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 215;
					this.aliasName();
					this.state = 216;
					this.match(JavaScriptParser.Comma);
					}
					}
				}
				this.state = 222;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (JavaScriptParser.NullLiteral - 60)) | (1 << (JavaScriptParser.BooleanLiteral - 60)) | (1 << (JavaScriptParser.Break - 60)) | (1 << (JavaScriptParser.Do - 60)) | (1 << (JavaScriptParser.Instanceof - 60)) | (1 << (JavaScriptParser.Typeof - 60)) | (1 << (JavaScriptParser.Case - 60)) | (1 << (JavaScriptParser.Else - 60)) | (1 << (JavaScriptParser.New - 60)) | (1 << (JavaScriptParser.Var - 60)) | (1 << (JavaScriptParser.Catch - 60)) | (1 << (JavaScriptParser.Finally - 60)) | (1 << (JavaScriptParser.Return - 60)) | (1 << (JavaScriptParser.Void - 60)) | (1 << (JavaScriptParser.Continue - 60)) | (1 << (JavaScriptParser.For - 60)) | (1 << (JavaScriptParser.Switch - 60)) | (1 << (JavaScriptParser.While - 60)) | (1 << (JavaScriptParser.Debugger - 60)) | (1 << (JavaScriptParser.Function_ - 60)) | (1 << (JavaScriptParser.This - 60)) | (1 << (JavaScriptParser.With - 60)) | (1 << (JavaScriptParser.Default - 60)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (JavaScriptParser.If - 92)) | (1 << (JavaScriptParser.Throw - 92)) | (1 << (JavaScriptParser.Delete - 92)) | (1 << (JavaScriptParser.In - 92)) | (1 << (JavaScriptParser.Try - 92)) | (1 << (JavaScriptParser.As - 92)) | (1 << (JavaScriptParser.From - 92)) | (1 << (JavaScriptParser.Class - 92)) | (1 << (JavaScriptParser.Enum - 92)) | (1 << (JavaScriptParser.Extends - 92)) | (1 << (JavaScriptParser.Super - 92)) | (1 << (JavaScriptParser.Const - 92)) | (1 << (JavaScriptParser.Export - 92)) | (1 << (JavaScriptParser.Import - 92)) | (1 << (JavaScriptParser.Async - 92)) | (1 << (JavaScriptParser.Await - 92)) | (1 << (JavaScriptParser.Implements - 92)) | (1 << (JavaScriptParser.StrictLet - 92)) | (1 << (JavaScriptParser.NonStrictLet - 92)) | (1 << (JavaScriptParser.Private - 92)) | (1 << (JavaScriptParser.Public - 92)) | (1 << (JavaScriptParser.Interface - 92)) | (1 << (JavaScriptParser.Package - 92)) | (1 << (JavaScriptParser.Protected - 92)) | (1 << (JavaScriptParser.Static - 92)) | (1 << (JavaScriptParser.Yield - 92)) | (1 << (JavaScriptParser.Identifier - 92)))) !== 0)) {
				{
				this.state = 223;
				this.aliasName();
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Comma) {
					{
					this.state = 224;
					this.match(JavaScriptParser.Comma);
					}
				}

				}
			}

			this.state = 229;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDefault(): ImportDefaultContext {
		let _localctx: ImportDefaultContext = new ImportDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JavaScriptParser.RULE_importDefault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.aliasName();
			this.state = 232;
			this.match(JavaScriptParser.Comma);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importNamespace(): ImportNamespaceContext {
		let _localctx: ImportNamespaceContext = new ImportNamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JavaScriptParser.RULE_importNamespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Multiply:
				{
				this.state = 234;
				this.match(JavaScriptParser.Multiply);
				}
				break;
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function_:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
			case JavaScriptParser.Identifier:
				{
				this.state = 235;
				this.identifierName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.As) {
				{
				this.state = 238;
				this.match(JavaScriptParser.As);
				this.state = 239;
				this.identifierName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importFrom(): ImportFromContext {
		let _localctx: ImportFromContext = new ImportFromContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JavaScriptParser.RULE_importFrom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(JavaScriptParser.From);
			this.state = 243;
			this.match(JavaScriptParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasName(): AliasNameContext {
		let _localctx: AliasNameContext = new AliasNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JavaScriptParser.RULE_aliasName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.identifierName();
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.As) {
				{
				this.state = 246;
				this.match(JavaScriptParser.As);
				this.state = 247;
				this.identifierName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportStatement(): ExportStatementContext {
		let _localctx: ExportStatementContext = new ExportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JavaScriptParser.RULE_exportStatement);
		try {
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				_localctx = new ExportDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 250;
				this.match(JavaScriptParser.Export);
				this.state = 253;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 251;
					this.exportFromBlock();
					}
					break;

				case 2:
					{
					this.state = 252;
					this.declaration();
					}
					break;
				}
				this.state = 255;
				this.eos();
				}
				break;

			case 2:
				_localctx = new ExportDefaultDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
				this.match(JavaScriptParser.Export);
				this.state = 258;
				this.match(JavaScriptParser.Default);
				this.state = 259;
				this.singleExpression(0);
				this.state = 260;
				this.eos();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportFromBlock(): ExportFromBlockContext {
		let _localctx: ExportFromBlockContext = new ExportFromBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JavaScriptParser.RULE_exportFromBlock);
		try {
			this.state = 274;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Multiply:
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function_:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 264;
				this.importNamespace();
				this.state = 265;
				this.importFrom();
				this.state = 266;
				this.eos();
				}
				break;
			case JavaScriptParser.OpenBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 268;
				this.moduleItems();
				this.state = 270;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 269;
					this.importFrom();
					}
					break;
				}
				this.state = 272;
				this.eos();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JavaScriptParser.RULE_declaration);
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Var:
			case JavaScriptParser.Const:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 276;
				this.variableStatement();
				}
				break;
			case JavaScriptParser.Class:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 277;
				this.classDeclaration();
				}
				break;
			case JavaScriptParser.Function_:
			case JavaScriptParser.Async:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 278;
				this.functionDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JavaScriptParser.RULE_variableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.variableDeclarationList();
			this.state = 282;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JavaScriptParser.RULE_variableDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.varModifier();
			this.state = 285;
			this.variableDeclaration();
			this.state = 290;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 286;
					this.match(JavaScriptParser.Comma);
					this.state = 287;
					this.variableDeclaration();
					}
					}
				}
				this.state = 292;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JavaScriptParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.assignable();
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 294;
				this.match(JavaScriptParser.Assign);
				this.state = 295;
				this.singleExpression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JavaScriptParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(JavaScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JavaScriptParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			if (!(this.notOpenBraceAndNotFunction())) {
				throw this.createFailedPredicateException("this.notOpenBraceAndNotFunction()");
			}
			this.state = 301;
			this.expressionSequence();
			this.state = 302;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JavaScriptParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(JavaScriptParser.If);
			this.state = 305;
			this.match(JavaScriptParser.OpenParen);
			this.state = 306;
			this.expressionSequence();
			this.state = 307;
			this.match(JavaScriptParser.CloseParen);
			this.state = 308;
			this.statement();
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 309;
				this.match(JavaScriptParser.Else);
				this.state = 310;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JavaScriptParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				_localctx = new DoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 313;
				this.match(JavaScriptParser.Do);
				this.state = 314;
				this.statement();
				this.state = 315;
				this.match(JavaScriptParser.While);
				this.state = 316;
				this.match(JavaScriptParser.OpenParen);
				this.state = 317;
				this.expressionSequence();
				this.state = 318;
				this.match(JavaScriptParser.CloseParen);
				this.state = 319;
				this.eos();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
				this.match(JavaScriptParser.While);
				this.state = 322;
				this.match(JavaScriptParser.OpenParen);
				this.state = 323;
				this.expressionSequence();
				this.state = 324;
				this.match(JavaScriptParser.CloseParen);
				this.state = 325;
				this.statement();
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 327;
				this.match(JavaScriptParser.For);
				this.state = 328;
				this.match(JavaScriptParser.OpenParen);
				this.state = 331;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 329;
					this.expressionSequence();
					}
					break;

				case 2:
					{
					this.state = 330;
					this.variableDeclarationList();
					}
					break;
				}
				this.state = 333;
				this.match(JavaScriptParser.SemiColon);
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (JavaScriptParser.NullLiteral - 60)) | (1 << (JavaScriptParser.BooleanLiteral - 60)) | (1 << (JavaScriptParser.DecimalLiteral - 60)) | (1 << (JavaScriptParser.HexIntegerLiteral - 60)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 60)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 60)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 60)) | (1 << (JavaScriptParser.Typeof - 60)) | (1 << (JavaScriptParser.New - 60)) | (1 << (JavaScriptParser.Void - 60)) | (1 << (JavaScriptParser.Function_ - 60)) | (1 << (JavaScriptParser.This - 60)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (JavaScriptParser.Delete - 94)) | (1 << (JavaScriptParser.Class - 94)) | (1 << (JavaScriptParser.Super - 94)) | (1 << (JavaScriptParser.Import - 94)) | (1 << (JavaScriptParser.Async - 94)) | (1 << (JavaScriptParser.Await - 94)) | (1 << (JavaScriptParser.NonStrictLet - 94)) | (1 << (JavaScriptParser.Yield - 94)) | (1 << (JavaScriptParser.Identifier - 94)) | (1 << (JavaScriptParser.StringLiteral - 94)) | (1 << (JavaScriptParser.BackTick - 94)))) !== 0)) {
					{
					this.state = 334;
					this.expressionSequence();
					}
				}

				this.state = 337;
				this.match(JavaScriptParser.SemiColon);
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (JavaScriptParser.NullLiteral - 60)) | (1 << (JavaScriptParser.BooleanLiteral - 60)) | (1 << (JavaScriptParser.DecimalLiteral - 60)) | (1 << (JavaScriptParser.HexIntegerLiteral - 60)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 60)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 60)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 60)) | (1 << (JavaScriptParser.Typeof - 60)) | (1 << (JavaScriptParser.New - 60)) | (1 << (JavaScriptParser.Void - 60)) | (1 << (JavaScriptParser.Function_ - 60)) | (1 << (JavaScriptParser.This - 60)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (JavaScriptParser.Delete - 94)) | (1 << (JavaScriptParser.Class - 94)) | (1 << (JavaScriptParser.Super - 94)) | (1 << (JavaScriptParser.Import - 94)) | (1 << (JavaScriptParser.Async - 94)) | (1 << (JavaScriptParser.Await - 94)) | (1 << (JavaScriptParser.NonStrictLet - 94)) | (1 << (JavaScriptParser.Yield - 94)) | (1 << (JavaScriptParser.Identifier - 94)) | (1 << (JavaScriptParser.StringLiteral - 94)) | (1 << (JavaScriptParser.BackTick - 94)))) !== 0)) {
					{
					this.state = 338;
					this.expressionSequence();
					}
				}

				this.state = 341;
				this.match(JavaScriptParser.CloseParen);
				this.state = 342;
				this.statement();
				}
				break;

			case 4:
				_localctx = new ForInStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 343;
				this.match(JavaScriptParser.For);
				this.state = 344;
				this.match(JavaScriptParser.OpenParen);
				this.state = 347;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 345;
					this.singleExpression(0);
					}
					break;

				case 2:
					{
					this.state = 346;
					this.variableDeclarationList();
					}
					break;
				}
				this.state = 349;
				this.match(JavaScriptParser.In);
				this.state = 350;
				this.expressionSequence();
				this.state = 351;
				this.match(JavaScriptParser.CloseParen);
				this.state = 352;
				this.statement();
				}
				break;

			case 5:
				_localctx = new ForOfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 354;
				this.match(JavaScriptParser.For);
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Await) {
					{
					this.state = 355;
					this.match(JavaScriptParser.Await);
					}
				}

				this.state = 358;
				this.match(JavaScriptParser.OpenParen);
				this.state = 361;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 359;
					this.singleExpression(0);
					}
					break;

				case 2:
					{
					this.state = 360;
					this.variableDeclarationList();
					}
					break;
				}
				this.state = 363;
				this.identifier();
				this.state = 364;
				if (!(this.p("of"))) {
					throw this.createFailedPredicateException("this.p(\"of\")");
				}
				this.state = 365;
				this.expressionSequence();
				this.state = 366;
				this.match(JavaScriptParser.CloseParen);
				this.state = 367;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varModifier(): VarModifierContext {
		let _localctx: VarModifierContext = new VarModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JavaScriptParser.RULE_varModifier);
		try {
			this.state = 374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Var:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 371;
				this.match(JavaScriptParser.Var);
				}
				break;
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 372;
				this.let_();
				}
				break;
			case JavaScriptParser.Const:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 373;
				this.match(JavaScriptParser.Const);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JavaScriptParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(JavaScriptParser.Continue);
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 377;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 378;
				this.identifier();
				}
				break;
			}
			this.state = 381;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JavaScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(JavaScriptParser.Break);
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 384;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 385;
				this.identifier();
				}
				break;
			}
			this.state = 388;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JavaScriptParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(JavaScriptParser.Return);
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 391;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 392;
				this.expressionSequence();
				}
				break;
			}
			this.state = 395;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yieldStatement(): YieldStatementContext {
		let _localctx: YieldStatementContext = new YieldStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, JavaScriptParser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(JavaScriptParser.Yield);
			this.state = 400;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 398;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 399;
				this.expressionSequence();
				}
				break;
			}
			this.state = 402;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withStatement(): WithStatementContext {
		let _localctx: WithStatementContext = new WithStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JavaScriptParser.RULE_withStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.match(JavaScriptParser.With);
			this.state = 405;
			this.match(JavaScriptParser.OpenParen);
			this.state = 406;
			this.expressionSequence();
			this.state = 407;
			this.match(JavaScriptParser.CloseParen);
			this.state = 408;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, JavaScriptParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.match(JavaScriptParser.Switch);
			this.state = 411;
			this.match(JavaScriptParser.OpenParen);
			this.state = 412;
			this.expressionSequence();
			this.state = 413;
			this.match(JavaScriptParser.CloseParen);
			this.state = 414;
			this.caseBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseBlock(): CaseBlockContext {
		let _localctx: CaseBlockContext = new CaseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, JavaScriptParser.RULE_caseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Case) {
				{
				this.state = 417;
				this.caseClauses();
				}
			}

			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Default) {
				{
				this.state = 420;
				this.defaultClause();
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Case) {
					{
					this.state = 421;
					this.caseClauses();
					}
				}

				}
			}

			this.state = 426;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClauses(): CaseClausesContext {
		let _localctx: CaseClausesContext = new CaseClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, JavaScriptParser.RULE_caseClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 428;
				this.caseClause();
				}
				}
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === JavaScriptParser.Case);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClause(): CaseClauseContext {
		let _localctx: CaseClauseContext = new CaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JavaScriptParser.RULE_caseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.match(JavaScriptParser.Case);
			this.state = 434;
			this.expressionSequence();
			this.state = 435;
			this.match(JavaScriptParser.Colon);
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 436;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultClause(): DefaultClauseContext {
		let _localctx: DefaultClauseContext = new DefaultClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, JavaScriptParser.RULE_defaultClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(JavaScriptParser.Default);
			this.state = 440;
			this.match(JavaScriptParser.Colon);
			this.state = 442;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 441;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelledStatement(): LabelledStatementContext {
		let _localctx: LabelledStatementContext = new LabelledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, JavaScriptParser.RULE_labelledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.identifier();
			this.state = 445;
			this.match(JavaScriptParser.Colon);
			this.state = 446;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, JavaScriptParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this.match(JavaScriptParser.Throw);
			this.state = 449;
			if (!(this.notLineTerminator())) {
				throw this.createFailedPredicateException("this.notLineTerminator()");
			}
			this.state = 450;
			this.expressionSequence();
			this.state = 451;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, JavaScriptParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(JavaScriptParser.Try);
			this.state = 454;
			this.block();
			this.state = 460;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Catch:
				{
				this.state = 455;
				this.catchProduction();
				this.state = 457;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 456;
					this.finallyProduction();
					}
					break;
				}
				}
				break;
			case JavaScriptParser.Finally:
				{
				this.state = 459;
				this.finallyProduction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchProduction(): CatchProductionContext {
		let _localctx: CatchProductionContext = new CatchProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, JavaScriptParser.RULE_catchProduction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.match(JavaScriptParser.Catch);
			this.state = 468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.OpenParen) {
				{
				this.state = 463;
				this.match(JavaScriptParser.OpenParen);
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.OpenBracket || _la === JavaScriptParser.OpenBrace || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaScriptParser.Async - 106)) | (1 << (JavaScriptParser.NonStrictLet - 106)) | (1 << (JavaScriptParser.Identifier - 106)))) !== 0)) {
					{
					this.state = 464;
					this.assignable();
					}
				}

				this.state = 467;
				this.match(JavaScriptParser.CloseParen);
				}
			}

			this.state = 470;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyProduction(): FinallyProductionContext {
		let _localctx: FinallyProductionContext = new FinallyProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, JavaScriptParser.RULE_finallyProduction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(JavaScriptParser.Finally);
			this.state = 473;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public debuggerStatement(): DebuggerStatementContext {
		let _localctx: DebuggerStatementContext = new DebuggerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, JavaScriptParser.RULE_debuggerStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(JavaScriptParser.Debugger);
			this.state = 476;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, JavaScriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Async) {
				{
				this.state = 478;
				this.match(JavaScriptParser.Async);
				}
			}

			this.state = 481;
			this.match(JavaScriptParser.Function_);
			this.state = 483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Multiply) {
				{
				this.state = 482;
				this.match(JavaScriptParser.Multiply);
				}
			}

			this.state = 485;
			this.identifier();
			this.state = 486;
			this.match(JavaScriptParser.OpenParen);
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaScriptParser.Async - 106)) | (1 << (JavaScriptParser.NonStrictLet - 106)) | (1 << (JavaScriptParser.Identifier - 106)))) !== 0)) {
				{
				this.state = 487;
				this.formalParameterList();
				}
			}

			this.state = 490;
			this.match(JavaScriptParser.CloseParen);
			this.state = 491;
			this.functionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, JavaScriptParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.match(JavaScriptParser.Class);
			this.state = 494;
			this.identifier();
			this.state = 495;
			this.classTail();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classTail(): ClassTailContext {
		let _localctx: ClassTailContext = new ClassTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, JavaScriptParser.RULE_classTail);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Extends) {
				{
				this.state = 497;
				this.match(JavaScriptParser.Extends);
				this.state = 498;
				this.singleExpression(0);
				}
			}

			this.state = 501;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 505;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 502;
					this.classElement();
					}
					}
				}
				this.state = 507;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 508;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classElement(): ClassElementContext {
		let _localctx: ClassElementContext = new ClassElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, JavaScriptParser.RULE_classElement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 516;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 514;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
						case 1:
							{
							this.state = 510;
							this.match(JavaScriptParser.Static);
							}
							break;

						case 2:
							{
							this.state = 511;
							if (!(this.n("static"))) {
								throw this.createFailedPredicateException("this.n(\"static\")");
							}
							this.state = 512;
							this.identifier();
							}
							break;

						case 3:
							{
							this.state = 513;
							this.match(JavaScriptParser.Async);
							}
							break;
						}
						}
					}
					this.state = 518;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				}
				this.state = 525;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 519;
					this.methodDefinition();
					}
					break;

				case 2:
					{
					this.state = 520;
					this.assignable();
					this.state = 521;
					this.match(JavaScriptParser.Assign);
					this.state = 522;
					this.objectLiteral();
					this.state = 523;
					this.match(JavaScriptParser.SemiColon);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 527;
				this.emptyStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Hashtag) {
					{
					this.state = 528;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 531;
				this.propertyName();
				this.state = 532;
				this.match(JavaScriptParser.Assign);
				this.state = 533;
				this.singleExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDefinition(): MethodDefinitionContext {
		let _localctx: MethodDefinitionContext = new MethodDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, JavaScriptParser.RULE_methodDefinition);
		let _la: number;
		try {
			this.state = 576;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 537;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Hashtag) {
					{
					this.state = 540;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 543;
				this.propertyName();
				this.state = 544;
				this.match(JavaScriptParser.OpenParen);
				this.state = 546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaScriptParser.Async - 106)) | (1 << (JavaScriptParser.NonStrictLet - 106)) | (1 << (JavaScriptParser.Identifier - 106)))) !== 0)) {
					{
					this.state = 545;
					this.formalParameterList();
					}
				}

				this.state = 548;
				this.match(JavaScriptParser.CloseParen);
				this.state = 549;
				this.functionBody();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 552;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
				case 1:
					{
					this.state = 551;
					this.match(JavaScriptParser.Multiply);
					}
					break;
				}
				this.state = 555;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 554;
					this.match(JavaScriptParser.Hashtag);
					}
					break;
				}
				this.state = 557;
				this.getter();
				this.state = 558;
				this.match(JavaScriptParser.OpenParen);
				this.state = 559;
				this.match(JavaScriptParser.CloseParen);
				this.state = 560;
				this.functionBody();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 563;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 562;
					this.match(JavaScriptParser.Multiply);
					}
					break;
				}
				this.state = 566;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
				case 1:
					{
					this.state = 565;
					this.match(JavaScriptParser.Hashtag);
					}
					break;
				}
				this.state = 568;
				this.setter();
				this.state = 569;
				this.match(JavaScriptParser.OpenParen);
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaScriptParser.Async - 106)) | (1 << (JavaScriptParser.NonStrictLet - 106)) | (1 << (JavaScriptParser.Identifier - 106)))) !== 0)) {
					{
					this.state = 570;
					this.formalParameterList();
					}
				}

				this.state = 573;
				this.match(JavaScriptParser.CloseParen);
				this.state = 574;
				this.functionBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, JavaScriptParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 591;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.OpenBracket:
			case JavaScriptParser.OpenBrace:
			case JavaScriptParser.Async:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 578;
				this.formalParameterArg();
				this.state = 583;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 579;
						this.match(JavaScriptParser.Comma);
						this.state = 580;
						this.formalParameterArg();
						}
						}
					}
					this.state = 585;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				}
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Comma) {
					{
					this.state = 586;
					this.match(JavaScriptParser.Comma);
					this.state = 587;
					this.lastFormalParameterArg();
					}
				}

				}
				break;
			case JavaScriptParser.Ellipsis:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.lastFormalParameterArg();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterArg(): FormalParameterArgContext {
		let _localctx: FormalParameterArgContext = new FormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, JavaScriptParser.RULE_formalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.assignable();
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Assign) {
				{
				this.state = 594;
				this.match(JavaScriptParser.Assign);
				this.state = 595;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameterArg(): LastFormalParameterArgContext {
		let _localctx: LastFormalParameterArgContext = new LastFormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, JavaScriptParser.RULE_lastFormalParameterArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.match(JavaScriptParser.Ellipsis);
			this.state = 599;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, JavaScriptParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 603;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 602;
				this.sourceElements();
				}
				break;
			}
			this.state = 605;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElements(): SourceElementsContext {
		let _localctx: SourceElementsContext = new SourceElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, JavaScriptParser.RULE_sourceElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 607;
					this.sourceElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 610;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, JavaScriptParser.RULE_arrayLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 612;
			this.match(JavaScriptParser.OpenBracket);
			this.state = 613;
			this.elementList();
			this.state = 614;
			this.match(JavaScriptParser.CloseBracket);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, JavaScriptParser.RULE_elementList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 616;
					this.match(JavaScriptParser.Comma);
					}
					}
				}
				this.state = 621;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			}
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (JavaScriptParser.NullLiteral - 60)) | (1 << (JavaScriptParser.BooleanLiteral - 60)) | (1 << (JavaScriptParser.DecimalLiteral - 60)) | (1 << (JavaScriptParser.HexIntegerLiteral - 60)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 60)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 60)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 60)) | (1 << (JavaScriptParser.Typeof - 60)) | (1 << (JavaScriptParser.New - 60)) | (1 << (JavaScriptParser.Void - 60)) | (1 << (JavaScriptParser.Function_ - 60)) | (1 << (JavaScriptParser.This - 60)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (JavaScriptParser.Delete - 94)) | (1 << (JavaScriptParser.Class - 94)) | (1 << (JavaScriptParser.Super - 94)) | (1 << (JavaScriptParser.Import - 94)) | (1 << (JavaScriptParser.Async - 94)) | (1 << (JavaScriptParser.Await - 94)) | (1 << (JavaScriptParser.NonStrictLet - 94)) | (1 << (JavaScriptParser.Yield - 94)) | (1 << (JavaScriptParser.Identifier - 94)) | (1 << (JavaScriptParser.StringLiteral - 94)) | (1 << (JavaScriptParser.BackTick - 94)))) !== 0)) {
				{
				this.state = 622;
				this.arrayElement();
				}
			}

			this.state = 633;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 626;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 625;
						this.match(JavaScriptParser.Comma);
						}
						}
						this.state = 628;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === JavaScriptParser.Comma);
					this.state = 630;
					this.arrayElement();
					}
					}
				}
				this.state = 635;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			}
			this.state = 639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaScriptParser.Comma) {
				{
				{
				this.state = 636;
				this.match(JavaScriptParser.Comma);
				}
				}
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayElement(): ArrayElementContext {
		let _localctx: ArrayElementContext = new ArrayElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, JavaScriptParser.RULE_arrayElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Ellipsis) {
				{
				this.state = 642;
				this.match(JavaScriptParser.Ellipsis);
				}
			}

			this.state = 645;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyAssignment(): PropertyAssignmentContext {
		let _localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, JavaScriptParser.RULE_propertyAssignment);
		let _la: number;
		try {
			this.state = 686;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				_localctx = new PropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 647;
				this.propertyName();
				this.state = 648;
				this.match(JavaScriptParser.Colon);
				this.state = 649;
				this.singleExpression(0);
				}
				break;

			case 2:
				_localctx = new ComputedPropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 651;
				this.match(JavaScriptParser.OpenBracket);
				this.state = 652;
				this.singleExpression(0);
				this.state = 653;
				this.match(JavaScriptParser.CloseBracket);
				this.state = 654;
				this.match(JavaScriptParser.Colon);
				this.state = 655;
				this.singleExpression(0);
				}
				break;

			case 3:
				_localctx = new FunctionPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 658;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 657;
					this.match(JavaScriptParser.Async);
					}
					break;
				}
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 660;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 663;
				this.propertyName();
				this.state = 664;
				this.match(JavaScriptParser.OpenParen);
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaScriptParser.Async - 106)) | (1 << (JavaScriptParser.NonStrictLet - 106)) | (1 << (JavaScriptParser.Identifier - 106)))) !== 0)) {
					{
					this.state = 665;
					this.formalParameterList();
					}
				}

				this.state = 668;
				this.match(JavaScriptParser.CloseParen);
				this.state = 669;
				this.functionBody();
				}
				break;

			case 4:
				_localctx = new PropertyGetterContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 671;
				this.getter();
				this.state = 672;
				this.match(JavaScriptParser.OpenParen);
				this.state = 673;
				this.match(JavaScriptParser.CloseParen);
				this.state = 674;
				this.functionBody();
				}
				break;

			case 5:
				_localctx = new PropertySetterContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 676;
				this.setter();
				this.state = 677;
				this.match(JavaScriptParser.OpenParen);
				this.state = 678;
				this.formalParameterArg();
				this.state = 679;
				this.match(JavaScriptParser.CloseParen);
				this.state = 680;
				this.functionBody();
				}
				break;

			case 6:
				_localctx = new PropertyShorthandContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Ellipsis) {
					{
					this.state = 682;
					this.match(JavaScriptParser.Ellipsis);
					}
				}

				this.state = 685;
				this.singleExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyName(): PropertyNameContext {
		let _localctx: PropertyNameContext = new PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, JavaScriptParser.RULE_propertyName);
		try {
			this.state = 695;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function_:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 688;
				this.identifierName();
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 689;
				this.match(JavaScriptParser.StringLiteral);
				}
				break;
			case JavaScriptParser.DecimalLiteral:
			case JavaScriptParser.HexIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral2:
			case JavaScriptParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 690;
				this.numericLiteral();
				}
				break;
			case JavaScriptParser.OpenBracket:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 691;
				this.match(JavaScriptParser.OpenBracket);
				this.state = 692;
				this.singleExpression(0);
				this.state = 693;
				this.match(JavaScriptParser.CloseBracket);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, JavaScriptParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697;
			this.match(JavaScriptParser.OpenParen);
			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (JavaScriptParser.NullLiteral - 60)) | (1 << (JavaScriptParser.BooleanLiteral - 60)) | (1 << (JavaScriptParser.DecimalLiteral - 60)) | (1 << (JavaScriptParser.HexIntegerLiteral - 60)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 60)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 60)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 60)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 60)) | (1 << (JavaScriptParser.Typeof - 60)) | (1 << (JavaScriptParser.New - 60)) | (1 << (JavaScriptParser.Void - 60)) | (1 << (JavaScriptParser.Function_ - 60)) | (1 << (JavaScriptParser.This - 60)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (JavaScriptParser.Delete - 94)) | (1 << (JavaScriptParser.Class - 94)) | (1 << (JavaScriptParser.Super - 94)) | (1 << (JavaScriptParser.Import - 94)) | (1 << (JavaScriptParser.Async - 94)) | (1 << (JavaScriptParser.Await - 94)) | (1 << (JavaScriptParser.NonStrictLet - 94)) | (1 << (JavaScriptParser.Yield - 94)) | (1 << (JavaScriptParser.Identifier - 94)) | (1 << (JavaScriptParser.StringLiteral - 94)) | (1 << (JavaScriptParser.BackTick - 94)))) !== 0)) {
				{
				this.state = 698;
				this.argument();
				this.state = 703;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 699;
						this.match(JavaScriptParser.Comma);
						this.state = 700;
						this.argument();
						}
						}
					}
					this.state = 705;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				}
				this.state = 707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Comma) {
					{
					this.state = 706;
					this.match(JavaScriptParser.Comma);
					}
				}

				}
			}

			this.state = 711;
			this.match(JavaScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, JavaScriptParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Ellipsis) {
				{
				this.state = 713;
				this.match(JavaScriptParser.Ellipsis);
				}
			}

			this.state = 718;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 716;
				this.singleExpression(0);
				}
				break;

			case 2:
				{
				this.state = 717;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, JavaScriptParser.RULE_expressionSequence);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this.singleExpression(0);
			this.state = 725;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 721;
					this.match(JavaScriptParser.Comma);
					this.state = 722;
					this.singleExpression(0);
					}
					}
				}
				this.state = 727;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 114;
		this.enterRecursionRule(_localctx, 114, JavaScriptParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 729;
				this.anonymousFunction();
				}
				break;

			case 2:
				{
				_localctx = new ClassExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 730;
				this.match(JavaScriptParser.Class);
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaScriptParser.Async - 106)) | (1 << (JavaScriptParser.NonStrictLet - 106)) | (1 << (JavaScriptParser.Identifier - 106)))) !== 0)) {
					{
					this.state = 731;
					this.identifier();
					}
				}

				this.state = 734;
				this.classTail();
				}
				break;

			case 3:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 735;
				this.match(JavaScriptParser.New);
				this.state = 736;
				this.singleExpression(0);
				this.state = 737;
				this.arguments();
				}
				break;

			case 4:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 739;
				this.match(JavaScriptParser.New);
				this.state = 740;
				this.singleExpression(42);
				}
				break;

			case 5:
				{
				_localctx = new MetaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 741;
				this.match(JavaScriptParser.New);
				this.state = 742;
				this.match(JavaScriptParser.Dot);
				this.state = 743;
				this.identifier();
				}
				break;

			case 6:
				{
				_localctx = new DeleteExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 744;
				this.match(JavaScriptParser.Delete);
				this.state = 745;
				this.singleExpression(37);
				}
				break;

			case 7:
				{
				_localctx = new VoidExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 746;
				this.match(JavaScriptParser.Void);
				this.state = 747;
				this.singleExpression(36);
				}
				break;

			case 8:
				{
				_localctx = new TypeofExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 748;
				this.match(JavaScriptParser.Typeof);
				this.state = 749;
				this.singleExpression(35);
				}
				break;

			case 9:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 750;
				this.match(JavaScriptParser.PlusPlus);
				this.state = 751;
				this.singleExpression(34);
				}
				break;

			case 10:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 752;
				this.match(JavaScriptParser.MinusMinus);
				this.state = 753;
				this.singleExpression(33);
				}
				break;

			case 11:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 754;
				this.match(JavaScriptParser.Plus);
				this.state = 755;
				this.singleExpression(32);
				}
				break;

			case 12:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 756;
				this.match(JavaScriptParser.Minus);
				this.state = 757;
				this.singleExpression(31);
				}
				break;

			case 13:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 758;
				this.match(JavaScriptParser.BitNot);
				this.state = 759;
				this.singleExpression(30);
				}
				break;

			case 14:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 760;
				this.match(JavaScriptParser.Not);
				this.state = 761;
				this.singleExpression(29);
				}
				break;

			case 15:
				{
				_localctx = new AwaitExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 762;
				this.match(JavaScriptParser.Await);
				this.state = 763;
				this.singleExpression(28);
				}
				break;

			case 16:
				{
				_localctx = new ImportExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 764;
				this.match(JavaScriptParser.Import);
				this.state = 765;
				this.match(JavaScriptParser.OpenParen);
				this.state = 766;
				this.singleExpression(0);
				this.state = 767;
				this.match(JavaScriptParser.CloseParen);
				}
				break;

			case 17:
				{
				_localctx = new YieldExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 769;
				this.yieldStatement();
				}
				break;

			case 18:
				{
				_localctx = new ThisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 770;
				this.match(JavaScriptParser.This);
				}
				break;

			case 19:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 771;
				this.identifier();
				}
				break;

			case 20:
				{
				_localctx = new SuperExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 772;
				this.match(JavaScriptParser.Super);
				}
				break;

			case 21:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 773;
				this.literal();
				}
				break;

			case 22:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 774;
				this.arrayLiteral();
				}
				break;

			case 23:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 775;
				this.objectLiteral();
				}
				break;

			case 24:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 776;
				this.match(JavaScriptParser.OpenParen);
				this.state = 777;
				this.expressionSequence();
				this.state = 778;
				this.match(JavaScriptParser.CloseParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 863;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 861;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 782;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 783;
						this.match(JavaScriptParser.Power);
						this.state = 784;
						this.singleExpression(27);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 785;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 786;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.Multiply) | (1 << JavaScriptParser.Divide) | (1 << JavaScriptParser.Modulus))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 787;
						this.singleExpression(27);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 788;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 789;
						_la = this._input.LA(1);
						if (!(_la === JavaScriptParser.Plus || _la === JavaScriptParser.Minus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 790;
						this.singleExpression(26);
						}
						break;

					case 4:
						{
						_localctx = new CoalesceExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 791;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 792;
						this.match(JavaScriptParser.NullCoalesce);
						this.state = 793;
						this.singleExpression(25);
						}
						break;

					case 5:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 794;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 795;
						_la = this._input.LA(1);
						if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (JavaScriptParser.RightShiftArithmetic - 31)) | (1 << (JavaScriptParser.LeftShiftArithmetic - 31)) | (1 << (JavaScriptParser.RightShiftLogical - 31)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 796;
						this.singleExpression(24);
						}
						break;

					case 6:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 797;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 798;
						_la = this._input.LA(1);
						if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JavaScriptParser.LessThan - 34)) | (1 << (JavaScriptParser.MoreThan - 34)) | (1 << (JavaScriptParser.LessThanEquals - 34)) | (1 << (JavaScriptParser.GreaterThanEquals - 34)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 799;
						this.singleExpression(23);
						}
						break;

					case 7:
						{
						_localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 800;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 801;
						this.match(JavaScriptParser.Instanceof);
						this.state = 802;
						this.singleExpression(22);
						}
						break;

					case 8:
						{
						_localctx = new InExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 803;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 804;
						this.match(JavaScriptParser.In);
						this.state = 805;
						this.singleExpression(21);
						}
						break;

					case 9:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 806;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 807;
						_la = this._input.LA(1);
						if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (JavaScriptParser.Equals_ - 38)) | (1 << (JavaScriptParser.NotEquals - 38)) | (1 << (JavaScriptParser.IdentityEquals - 38)) | (1 << (JavaScriptParser.IdentityNotEquals - 38)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 808;
						this.singleExpression(20);
						}
						break;

					case 10:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 809;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 810;
						this.match(JavaScriptParser.BitAnd);
						this.state = 811;
						this.singleExpression(19);
						}
						break;

					case 11:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 812;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 813;
						this.match(JavaScriptParser.BitXOr);
						this.state = 814;
						this.singleExpression(18);
						}
						break;

					case 12:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 815;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 816;
						this.match(JavaScriptParser.BitOr);
						this.state = 817;
						this.singleExpression(17);
						}
						break;

					case 13:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 818;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 819;
						this.match(JavaScriptParser.And);
						this.state = 820;
						this.singleExpression(16);
						}
						break;

					case 14:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 821;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 822;
						this.match(JavaScriptParser.Or);
						this.state = 823;
						this.singleExpression(15);
						}
						break;

					case 15:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 824;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 825;
						this.match(JavaScriptParser.QuestionMark);
						this.state = 826;
						this.singleExpression(0);
						this.state = 827;
						this.match(JavaScriptParser.Colon);
						this.state = 828;
						this.singleExpression(14);
						}
						break;

					case 16:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 830;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 831;
						this.match(JavaScriptParser.Assign);
						this.state = 832;
						this.singleExpression(12);
						}
						break;

					case 17:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 833;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 834;
						this.assignmentOperator();
						this.state = 835;
						this.singleExpression(11);
						}
						break;

					case 18:
						{
						_localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 837;
						if (!(this.precpred(this._ctx, 45))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 45)");
						}
						this.state = 838;
						this.match(JavaScriptParser.OpenBracket);
						this.state = 839;
						this.expressionSequence();
						this.state = 840;
						this.match(JavaScriptParser.CloseBracket);
						}
						break;

					case 19:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 842;
						if (!(this.precpred(this._ctx, 44))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 44)");
						}
						this.state = 844;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JavaScriptParser.QuestionMark) {
							{
							this.state = 843;
							this.match(JavaScriptParser.QuestionMark);
							}
						}

						this.state = 846;
						this.match(JavaScriptParser.Dot);
						this.state = 848;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JavaScriptParser.Hashtag) {
							{
							this.state = 847;
							this.match(JavaScriptParser.Hashtag);
							}
						}

						this.state = 850;
						this.identifierName();
						}
						break;

					case 20:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 851;
						if (!(this.precpred(this._ctx, 41))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 41)");
						}
						this.state = 852;
						this.arguments();
						}
						break;

					case 21:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 853;
						if (!(this.precpred(this._ctx, 39))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 39)");
						}
						this.state = 854;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 855;
						this.match(JavaScriptParser.PlusPlus);
						}
						break;

					case 22:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 856;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 857;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 858;
						this.match(JavaScriptParser.MinusMinus);
						}
						break;

					case 23:
						{
						_localctx = new TemplateStringExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 859;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 860;
						this.templateStringLiteral();
						}
						break;
					}
					}
				}
				this.state = 865;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignable(): AssignableContext {
		let _localctx: AssignableContext = new AssignableContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, JavaScriptParser.RULE_assignable);
		try {
			this.state = 869;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Async:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 866;
				this.identifier();
				}
				break;
			case JavaScriptParser.OpenBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 867;
				this.arrayLiteral();
				}
				break;
			case JavaScriptParser.OpenBrace:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 868;
				this.objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let _localctx: ObjectLiteralContext = new ObjectLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, JavaScriptParser.RULE_objectLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 883;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 872;
				this.propertyAssignment();
				this.state = 877;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 873;
						this.match(JavaScriptParser.Comma);
						this.state = 874;
						this.propertyAssignment();
						}
						}
					}
					this.state = 879;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				}
				this.state = 881;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Comma) {
					{
					this.state = 880;
					this.match(JavaScriptParser.Comma);
					}
				}

				}
				break;
			}
			this.state = 885;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anonymousFunction(): AnonymousFunctionContext {
		let _localctx: AnonymousFunctionContext = new AnonymousFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, JavaScriptParser.RULE_anonymousFunction);
		let _la: number;
		try {
			this.state = 908;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				_localctx = new FunctionDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 887;
				this.functionDeclaration();
				}
				break;

			case 2:
				_localctx = new AnonymousFunctionDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Async) {
					{
					this.state = 888;
					this.match(JavaScriptParser.Async);
					}
				}

				this.state = 891;
				this.match(JavaScriptParser.Function_);
				this.state = 893;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 892;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 895;
				this.match(JavaScriptParser.OpenParen);
				this.state = 897;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaScriptParser.Async - 106)) | (1 << (JavaScriptParser.NonStrictLet - 106)) | (1 << (JavaScriptParser.Identifier - 106)))) !== 0)) {
					{
					this.state = 896;
					this.formalParameterList();
					}
				}

				this.state = 899;
				this.match(JavaScriptParser.CloseParen);
				this.state = 900;
				this.functionBody();
				}
				break;

			case 3:
				_localctx = new ArrowFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 902;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 901;
					this.match(JavaScriptParser.Async);
					}
					break;
				}
				this.state = 904;
				this.arrowFunctionParameters();
				this.state = 905;
				this.match(JavaScriptParser.ARROW);
				this.state = 906;
				this.arrowFunctionBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		let _localctx: ArrowFunctionParametersContext = new ArrowFunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, JavaScriptParser.RULE_arrowFunctionParameters);
		let _la: number;
		try {
			this.state = 916;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Async:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 910;
				this.identifier();
				}
				break;
			case JavaScriptParser.OpenParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 911;
				this.match(JavaScriptParser.OpenParen);
				this.state = 913;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaScriptParser.Async - 106)) | (1 << (JavaScriptParser.NonStrictLet - 106)) | (1 << (JavaScriptParser.Identifier - 106)))) !== 0)) {
					{
					this.state = 912;
					this.formalParameterList();
					}
				}

				this.state = 915;
				this.match(JavaScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		let _localctx: ArrowFunctionBodyContext = new ArrowFunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, JavaScriptParser.RULE_arrowFunctionBody);
		try {
			this.state = 920;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 918;
				this.singleExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 919;
				this.functionBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, JavaScriptParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 922;
			_la = this._input.LA(1);
			if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (JavaScriptParser.MultiplyAssign - 47)) | (1 << (JavaScriptParser.DivideAssign - 47)) | (1 << (JavaScriptParser.ModulusAssign - 47)) | (1 << (JavaScriptParser.PlusAssign - 47)) | (1 << (JavaScriptParser.MinusAssign - 47)) | (1 << (JavaScriptParser.LeftShiftArithmeticAssign - 47)) | (1 << (JavaScriptParser.RightShiftArithmeticAssign - 47)) | (1 << (JavaScriptParser.RightShiftLogicalAssign - 47)) | (1 << (JavaScriptParser.BitAndAssign - 47)) | (1 << (JavaScriptParser.BitXorAssign - 47)) | (1 << (JavaScriptParser.BitOrAssign - 47)) | (1 << (JavaScriptParser.PowerAssign - 47)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, JavaScriptParser.RULE_literal);
		try {
			this.state = 931;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 924;
				this.match(JavaScriptParser.NullLiteral);
				}
				break;
			case JavaScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 925;
				this.match(JavaScriptParser.BooleanLiteral);
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 926;
				this.match(JavaScriptParser.StringLiteral);
				}
				break;
			case JavaScriptParser.BackTick:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 927;
				this.templateStringLiteral();
				}
				break;
			case JavaScriptParser.RegularExpressionLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 928;
				this.match(JavaScriptParser.RegularExpressionLiteral);
				}
				break;
			case JavaScriptParser.DecimalLiteral:
			case JavaScriptParser.HexIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral2:
			case JavaScriptParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 929;
				this.numericLiteral();
				}
				break;
			case JavaScriptParser.BigHexIntegerLiteral:
			case JavaScriptParser.BigOctalIntegerLiteral:
			case JavaScriptParser.BigBinaryIntegerLiteral:
			case JavaScriptParser.BigDecimalIntegerLiteral:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 930;
				this.bigintLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateStringLiteral(): TemplateStringLiteralContext {
		let _localctx: TemplateStringLiteralContext = new TemplateStringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, JavaScriptParser.RULE_templateStringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 933;
			this.match(JavaScriptParser.BackTick);
			this.state = 937;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaScriptParser.TemplateStringStartExpression || _la === JavaScriptParser.TemplateStringAtom) {
				{
				{
				this.state = 934;
				this.templateStringAtom();
				}
				}
				this.state = 939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 940;
			this.match(JavaScriptParser.BackTick);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateStringAtom(): TemplateStringAtomContext {
		let _localctx: TemplateStringAtomContext = new TemplateStringAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, JavaScriptParser.RULE_templateStringAtom);
		try {
			this.state = 947;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.TemplateStringAtom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 942;
				this.match(JavaScriptParser.TemplateStringAtom);
				}
				break;
			case JavaScriptParser.TemplateStringStartExpression:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 943;
				this.match(JavaScriptParser.TemplateStringStartExpression);
				this.state = 944;
				this.singleExpression(0);
				this.state = 945;
				this.match(JavaScriptParser.TemplateCloseBrace);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, JavaScriptParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 949;
			_la = this._input.LA(1);
			if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (JavaScriptParser.DecimalLiteral - 62)) | (1 << (JavaScriptParser.HexIntegerLiteral - 62)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 62)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 62)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 62)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bigintLiteral(): BigintLiteralContext {
		let _localctx: BigintLiteralContext = new BigintLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, JavaScriptParser.RULE_bigintLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 951;
			_la = this._input.LA(1);
			if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaScriptParser.BigHexIntegerLiteral - 67)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 67)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 67)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 67)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getter(): GetterContext {
		let _localctx: GetterContext = new GetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, JavaScriptParser.RULE_getter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 953;
			if (!(this.n("get"))) {
				throw this.createFailedPredicateException("this.n(\"get\")");
			}
			this.state = 954;
			this.identifier();
			this.state = 955;
			this.propertyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setter(): SetterContext {
		let _localctx: SetterContext = new SetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, JavaScriptParser.RULE_setter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 957;
			if (!(this.n("set"))) {
				throw this.createFailedPredicateException("this.n(\"set\")");
			}
			this.state = 958;
			this.identifier();
			this.state = 959;
			this.propertyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierName(): IdentifierNameContext {
		let _localctx: IdentifierNameContext = new IdentifierNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, JavaScriptParser.RULE_identifierName);
		try {
			this.state = 963;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 961;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 962;
				this.reservedWord();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, JavaScriptParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 965;
			_la = this._input.LA(1);
			if (!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaScriptParser.Async - 106)) | (1 << (JavaScriptParser.NonStrictLet - 106)) | (1 << (JavaScriptParser.Identifier - 106)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, JavaScriptParser.RULE_reservedWord);
		try {
			this.state = 970;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function_:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 967;
				this.keyword();
				}
				break;
			case JavaScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 968;
				this.match(JavaScriptParser.NullLiteral);
				}
				break;
			case JavaScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 969;
				this.match(JavaScriptParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, JavaScriptParser.RULE_keyword);
		try {
			this.state = 1018;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Break:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 972;
				this.match(JavaScriptParser.Break);
				}
				break;
			case JavaScriptParser.Do:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 973;
				this.match(JavaScriptParser.Do);
				}
				break;
			case JavaScriptParser.Instanceof:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 974;
				this.match(JavaScriptParser.Instanceof);
				}
				break;
			case JavaScriptParser.Typeof:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 975;
				this.match(JavaScriptParser.Typeof);
				}
				break;
			case JavaScriptParser.Case:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 976;
				this.match(JavaScriptParser.Case);
				}
				break;
			case JavaScriptParser.Else:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 977;
				this.match(JavaScriptParser.Else);
				}
				break;
			case JavaScriptParser.New:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 978;
				this.match(JavaScriptParser.New);
				}
				break;
			case JavaScriptParser.Var:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 979;
				this.match(JavaScriptParser.Var);
				}
				break;
			case JavaScriptParser.Catch:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 980;
				this.match(JavaScriptParser.Catch);
				}
				break;
			case JavaScriptParser.Finally:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 981;
				this.match(JavaScriptParser.Finally);
				}
				break;
			case JavaScriptParser.Return:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 982;
				this.match(JavaScriptParser.Return);
				}
				break;
			case JavaScriptParser.Void:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 983;
				this.match(JavaScriptParser.Void);
				}
				break;
			case JavaScriptParser.Continue:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 984;
				this.match(JavaScriptParser.Continue);
				}
				break;
			case JavaScriptParser.For:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 985;
				this.match(JavaScriptParser.For);
				}
				break;
			case JavaScriptParser.Switch:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 986;
				this.match(JavaScriptParser.Switch);
				}
				break;
			case JavaScriptParser.While:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 987;
				this.match(JavaScriptParser.While);
				}
				break;
			case JavaScriptParser.Debugger:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 988;
				this.match(JavaScriptParser.Debugger);
				}
				break;
			case JavaScriptParser.Function_:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 989;
				this.match(JavaScriptParser.Function_);
				}
				break;
			case JavaScriptParser.This:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 990;
				this.match(JavaScriptParser.This);
				}
				break;
			case JavaScriptParser.With:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 991;
				this.match(JavaScriptParser.With);
				}
				break;
			case JavaScriptParser.Default:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 992;
				this.match(JavaScriptParser.Default);
				}
				break;
			case JavaScriptParser.If:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 993;
				this.match(JavaScriptParser.If);
				}
				break;
			case JavaScriptParser.Throw:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 994;
				this.match(JavaScriptParser.Throw);
				}
				break;
			case JavaScriptParser.Delete:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 995;
				this.match(JavaScriptParser.Delete);
				}
				break;
			case JavaScriptParser.In:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 996;
				this.match(JavaScriptParser.In);
				}
				break;
			case JavaScriptParser.Try:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 997;
				this.match(JavaScriptParser.Try);
				}
				break;
			case JavaScriptParser.Class:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 998;
				this.match(JavaScriptParser.Class);
				}
				break;
			case JavaScriptParser.Enum:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 999;
				this.match(JavaScriptParser.Enum);
				}
				break;
			case JavaScriptParser.Extends:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1000;
				this.match(JavaScriptParser.Extends);
				}
				break;
			case JavaScriptParser.Super:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1001;
				this.match(JavaScriptParser.Super);
				}
				break;
			case JavaScriptParser.Const:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1002;
				this.match(JavaScriptParser.Const);
				}
				break;
			case JavaScriptParser.Export:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1003;
				this.match(JavaScriptParser.Export);
				}
				break;
			case JavaScriptParser.Import:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1004;
				this.match(JavaScriptParser.Import);
				}
				break;
			case JavaScriptParser.Implements:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1005;
				this.match(JavaScriptParser.Implements);
				}
				break;
			case JavaScriptParser.StrictLet:
			case JavaScriptParser.NonStrictLet:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 1006;
				this.let_();
				}
				break;
			case JavaScriptParser.Private:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 1007;
				this.match(JavaScriptParser.Private);
				}
				break;
			case JavaScriptParser.Public:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 1008;
				this.match(JavaScriptParser.Public);
				}
				break;
			case JavaScriptParser.Interface:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 1009;
				this.match(JavaScriptParser.Interface);
				}
				break;
			case JavaScriptParser.Package:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 1010;
				this.match(JavaScriptParser.Package);
				}
				break;
			case JavaScriptParser.Protected:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 1011;
				this.match(JavaScriptParser.Protected);
				}
				break;
			case JavaScriptParser.Static:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 1012;
				this.match(JavaScriptParser.Static);
				}
				break;
			case JavaScriptParser.Yield:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 1013;
				this.match(JavaScriptParser.Yield);
				}
				break;
			case JavaScriptParser.Async:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 1014;
				this.match(JavaScriptParser.Async);
				}
				break;
			case JavaScriptParser.Await:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 1015;
				this.match(JavaScriptParser.Await);
				}
				break;
			case JavaScriptParser.From:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 1016;
				this.match(JavaScriptParser.From);
				}
				break;
			case JavaScriptParser.As:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 1017;
				this.match(JavaScriptParser.As);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public let_(): Let_Context {
		let _localctx: Let_Context = new Let_Context(this._ctx, this.state);
		this.enterRule(_localctx, 150, JavaScriptParser.RULE_let_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1020;
			_la = this._input.LA(1);
			if (!(_la === JavaScriptParser.StrictLet || _la === JavaScriptParser.NonStrictLet)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, JavaScriptParser.RULE_eos);
		try {
			this.state = 1026;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1022;
				this.match(JavaScriptParser.SemiColon);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1023;
				this.match(JavaScriptParser.EOF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1024;
				if (!(this.lineTerminatorAhead())) {
					throw this.createFailedPredicateException("this.lineTerminatorAhead()");
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1025;
				if (!(this.closeBrace())) {
					throw this.createFailedPredicateException("this.closeBrace()");
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 19:
			return this.expressionStatement_sempred(_localctx as ExpressionStatementContext, predIndex);

		case 21:
			return this.iterationStatement_sempred(_localctx as IterationStatementContext, predIndex);

		case 23:
			return this.continueStatement_sempred(_localctx as ContinueStatementContext, predIndex);

		case 24:
			return this.breakStatement_sempred(_localctx as BreakStatementContext, predIndex);

		case 25:
			return this.returnStatement_sempred(_localctx as ReturnStatementContext, predIndex);

		case 26:
			return this.yieldStatement_sempred(_localctx as YieldStatementContext, predIndex);

		case 34:
			return this.throwStatement_sempred(_localctx as ThrowStatementContext, predIndex);

		case 42:
			return this.classElement_sempred(_localctx as ClassElementContext, predIndex);

		case 57:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);

		case 69:
			return this.getter_sempred(_localctx as GetterContext, predIndex);

		case 70:
			return this.setter_sempred(_localctx as SetterContext, predIndex);

		case 76:
			return this.eos_sempred(_localctx as EosContext, predIndex);
		}
		return true;
	}
	private expressionStatement_sempred(_localctx: ExpressionStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.notOpenBraceAndNotFunction();
		}
		return true;
	}
	private iterationStatement_sempred(_localctx: IterationStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.p("of");
		}
		return true;
	}
	private continueStatement_sempred(_localctx: ContinueStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.notLineTerminator();
		}
		return true;
	}
	private breakStatement_sempred(_localctx: BreakStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.notLineTerminator();
		}
		return true;
	}
	private returnStatement_sempred(_localctx: ReturnStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.notLineTerminator();
		}
		return true;
	}
	private yieldStatement_sempred(_localctx: YieldStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.notLineTerminator();
		}
		return true;
	}
	private throwStatement_sempred(_localctx: ThrowStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.notLineTerminator();
		}
		return true;
	}
	private classElement_sempred(_localctx: ClassElementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.n("static");
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 27);

		case 9:
			return this.precpred(this._ctx, 26);

		case 10:
			return this.precpred(this._ctx, 25);

		case 11:
			return this.precpred(this._ctx, 24);

		case 12:
			return this.precpred(this._ctx, 23);

		case 13:
			return this.precpred(this._ctx, 22);

		case 14:
			return this.precpred(this._ctx, 21);

		case 15:
			return this.precpred(this._ctx, 20);

		case 16:
			return this.precpred(this._ctx, 19);

		case 17:
			return this.precpred(this._ctx, 18);

		case 18:
			return this.precpred(this._ctx, 17);

		case 19:
			return this.precpred(this._ctx, 16);

		case 20:
			return this.precpred(this._ctx, 15);

		case 21:
			return this.precpred(this._ctx, 14);

		case 22:
			return this.precpred(this._ctx, 13);

		case 23:
			return this.precpred(this._ctx, 12);

		case 24:
			return this.precpred(this._ctx, 11);

		case 25:
			return this.precpred(this._ctx, 45);

		case 26:
			return this.precpred(this._ctx, 44);

		case 27:
			return this.precpred(this._ctx, 41);

		case 28:
			return this.precpred(this._ctx, 39);

		case 29:
			return this.notLineTerminator();

		case 30:
			return this.precpred(this._ctx, 38);

		case 31:
			return this.notLineTerminator();

		case 32:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}
	private getter_sempred(_localctx: GetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 33:
			return this.n("get");
		}
		return true;
	}
	private setter_sempred(_localctx: SetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 34:
			return this.n("set");
		}
		return true;
	}
	private eos_sempred(_localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return this.lineTerminatorAhead();

		case 36:
			return this.closeBrace();
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x81\u0407\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x03" +
		"\x02\x05\x02\x9E\n\x02\x03\x02\x05\x02\xA1\n\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\xBB\n\x04\x03\x05\x03\x05\x05\x05\xBF" +
		"\n\x05\x03\x05\x03\x05\x03\x06\x06\x06\xC4\n\x06\r\x06\x0E\x06\xC5\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x05\b\xCC\n\b\x03\b\x03\b\x05\b\xD0\n\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\xD7\n\b\x03\t\x03\t\x03\t\x03\t\x07\t" +
		"\xDD\n\t\f\t\x0E\t\xE0\v\t\x03\t\x03\t\x05\t\xE4\n\t\x05\t\xE6\n\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x05\v\xEF\n\v\x03\v\x03\v\x05\v" +
		"\xF3\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\xFB\n\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u0100\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u0109\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u0111\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0115\n\x0F\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\u011A\n\x10\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x07\x12\u0123\n\x12\f\x12\x0E\x12\u0126\v\x12" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\u012B\n\x13\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x05\x16\u013A\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x05\x17\u014E\n\x17\x03\x17\x03\x17\x05\x17\u0152" +
		"\n\x17\x03\x17\x03\x17\x05\x17\u0156\n\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x05\x17\u015E\n\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x05\x17\u0167\n\x17\x03\x17\x03\x17\x03\x17\x05" +
		"\x17\u016C\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17" +
		"\u0174\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0179\n\x18\x03\x19\x03\x19" +
		"\x03\x19\x05\x19\u017E\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x05" +
		"\x1A\u0185\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u018C" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0193\n\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u01A5\n\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u01A9\n\x1F\x05\x1F\u01AB\n\x1F\x03\x1F\x03\x1F" +
		"\x03 \x06 \u01B0\n \r \x0E \u01B1\x03!\x03!\x03!\x03!\x05!\u01B8\n!\x03" +
		"\"\x03\"\x03\"\x05\"\u01BD\n\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03" +
		"$\x03$\x03%\x03%\x03%\x03%\x05%\u01CC\n%\x03%\x05%\u01CF\n%\x03&\x03&" +
		"\x03&\x05&\u01D4\n&\x03&\x05&\u01D7\n&\x03&\x03&\x03\'\x03\'\x03\'\x03" +
		"(\x03(\x03(\x03)\x05)\u01E2\n)\x03)\x03)\x05)\u01E6\n)\x03)\x03)\x03)" +
		"\x05)\u01EB\n)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x05+\u01F6" +
		"\n+\x03+\x03+\x07+\u01FA\n+\f+\x0E+\u01FD\v+\x03+\x03+\x03,\x03,\x03," +
		"\x03,\x07,\u0205\n,\f,\x0E,\u0208\v,\x03,\x03,\x03,\x03,\x03,\x03,\x05" +
		",\u0210\n,\x03,\x03,\x05,\u0214\n,\x03,\x03,\x03,\x03,\x05,\u021A\n,\x03" +
		"-\x05-\u021D\n-\x03-\x05-\u0220\n-\x03-\x03-\x03-\x05-\u0225\n-\x03-\x03" +
		"-\x03-\x03-\x05-\u022B\n-\x03-\x05-\u022E\n-\x03-\x03-\x03-\x03-\x03-" +
		"\x03-\x05-\u0236\n-\x03-\x05-\u0239\n-\x03-\x03-\x03-\x05-\u023E\n-\x03" +
		"-\x03-\x03-\x05-\u0243\n-\x03.\x03.\x03.\x07.\u0248\n.\f.\x0E.\u024B\v" +
		".\x03.\x03.\x05.\u024F\n.\x03.\x05.\u0252\n.\x03/\x03/\x03/\x05/\u0257" +
		"\n/\x030\x030\x030\x031\x031\x051\u025E\n1\x031\x031\x032\x062\u0263\n" +
		"2\r2\x0E2\u0264\x033\x033\x033\x033\x034\x074\u026C\n4\f4\x0E4\u026F\v" +
		"4\x034\x054\u0272\n4\x034\x064\u0275\n4\r4\x0E4\u0276\x034\x074\u027A" +
		"\n4\f4\x0E4\u027D\v4\x034\x074\u0280\n4\f4\x0E4\u0283\v4\x035\x055\u0286" +
		"\n5\x035\x035\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x05" +
		"6\u0295\n6\x036\x056\u0298\n6\x036\x036\x036\x056\u029D\n6\x036\x036\x03" +
		"6\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x056\u02AE" +
		"\n6\x036\x056\u02B1\n6\x037\x037\x037\x037\x037\x037\x037\x057\u02BA\n" +
		"7\x038\x038\x038\x038\x078\u02C0\n8\f8\x0E8\u02C3\v8\x038\x058\u02C6\n" +
		"8\x058\u02C8\n8\x038\x038\x039\x059\u02CD\n9\x039\x039\x059\u02D1\n9\x03" +
		":\x03:\x03:\x07:\u02D6\n:\f:\x0E:\u02D9\v:\x03;\x03;\x03;\x03;\x05;\u02DF" +
		"\n;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x05;\u030F\n;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x05" +
		";\u034F\n;\x03;\x03;\x05;\u0353\n;\x03;\x03;\x03;\x03;\x03;\x03;\x03;" +
		"\x03;\x03;\x03;\x03;\x07;\u0360\n;\f;\x0E;\u0363\v;\x03<\x03<\x03<\x05" +
		"<\u0368\n<\x03=\x03=\x03=\x03=\x07=\u036E\n=\f=\x0E=\u0371\v=\x03=\x05" +
		"=\u0374\n=\x05=\u0376\n=\x03=\x03=\x03>\x03>\x05>\u037C\n>\x03>\x03>\x05" +
		">\u0380\n>\x03>\x03>\x05>\u0384\n>\x03>\x03>\x03>\x05>\u0389\n>\x03>\x03" +
		">\x03>\x03>\x05>\u038F\n>\x03?\x03?\x03?\x05?\u0394\n?\x03?\x05?\u0397" +
		"\n?\x03@\x03@\x05@\u039B\n@\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03" +
		"B\x05B\u03A6\nB\x03C\x03C\x07C\u03AA\nC\fC\x0EC\u03AD\vC\x03C\x03C\x03" +
		"D\x03D\x03D\x03D\x03D\x05D\u03B6\nD\x03E\x03E\x03F\x03F\x03G\x03G\x03" +
		"G\x03G\x03H\x03H\x03H\x03H\x03I\x03I\x05I\u03C6\nI\x03J\x03J\x03K\x03" +
		"K\x03K\x05K\u03CD\nK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u03FD\nL\x03M\x03M\x03" +
		"N\x03N\x03N\x03N\x05N\u0405\nN\x03N\x02\x02\x03tO\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
		"\x96\x02\x98\x02\x9A\x02\x02\f\x03\x02\x1B\x1D\x03\x02\x17\x18\x03\x02" +
		"!#\x03\x02$\'\x03\x02(+\x03\x021<\x03\x02@D\x03\x02EH\x05\x02llppxx\x03" +
		"\x02op\x02\u04AB\x02\x9D\x03\x02\x02\x02\x04\xA4\x03\x02\x02\x02\x06\xBA" +
		"\x03\x02\x02\x02\b\xBC\x03\x02\x02\x02\n\xC3\x03\x02\x02\x02\f\xC7\x03" +
		"\x02\x02\x02\x0E\xD6\x03\x02\x02\x02\x10\xD8\x03\x02\x02\x02\x12\xE9\x03" +
		"\x02\x02\x02\x14\xEE\x03\x02\x02\x02\x16\xF4\x03\x02\x02\x02\x18\xF7\x03" +
		"\x02\x02\x02\x1A\u0108\x03\x02\x02\x02\x1C\u0114\x03\x02\x02\x02\x1E\u0119" +
		"\x03\x02\x02\x02 \u011B\x03\x02\x02\x02\"\u011E\x03\x02\x02\x02$\u0127" +
		"\x03\x02\x02\x02&\u012C\x03\x02\x02\x02(\u012E\x03\x02\x02\x02*\u0132" +
		"\x03\x02\x02\x02,\u0173\x03\x02\x02\x02.\u0178\x03\x02\x02\x020\u017A" +
		"\x03\x02\x02\x022\u0181\x03\x02\x02\x024\u0188\x03\x02\x02\x026\u018F" +
		"\x03\x02\x02\x028\u0196\x03\x02\x02\x02:\u019C\x03\x02\x02\x02<\u01A2" +
		"\x03\x02\x02\x02>\u01AF\x03\x02\x02\x02@\u01B3\x03\x02\x02\x02B\u01B9" +
		"\x03\x02\x02\x02D\u01BE\x03\x02\x02\x02F\u01C2\x03\x02\x02\x02H\u01C7" +
		"\x03\x02\x02\x02J\u01D0\x03\x02\x02\x02L\u01DA\x03\x02\x02\x02N\u01DD" +
		"\x03\x02\x02\x02P\u01E1\x03\x02\x02\x02R\u01EF\x03\x02\x02\x02T\u01F5" +
		"\x03\x02\x02\x02V\u0219\x03\x02\x02\x02X\u0242\x03\x02\x02\x02Z\u0251" +
		"\x03\x02\x02\x02\\\u0253\x03\x02\x02\x02^\u0258\x03\x02\x02\x02`\u025B" +
		"\x03\x02\x02\x02b\u0262\x03\x02\x02\x02d\u0266\x03\x02\x02\x02f\u026D" +
		"\x03\x02\x02\x02h\u0285\x03\x02\x02\x02j\u02B0\x03\x02\x02\x02l\u02B9" +
		"\x03\x02\x02\x02n\u02BB\x03\x02\x02\x02p\u02CC\x03\x02\x02\x02r\u02D2" +
		"\x03\x02\x02\x02t\u030E\x03\x02\x02\x02v\u0367\x03\x02\x02\x02x\u0369" +
		"\x03\x02\x02\x02z\u038E\x03\x02\x02\x02|\u0396\x03\x02\x02\x02~\u039A" +
		"\x03\x02\x02\x02\x80\u039C\x03\x02\x02\x02\x82\u03A5\x03\x02\x02\x02\x84" +
		"\u03A7\x03\x02\x02\x02\x86\u03B5\x03\x02\x02\x02\x88\u03B7\x03\x02\x02" +
		"\x02\x8A\u03B9\x03\x02\x02\x02\x8C\u03BB\x03\x02\x02\x02\x8E\u03BF\x03" +
		"\x02\x02\x02\x90\u03C5\x03\x02\x02\x02\x92\u03C7\x03\x02\x02\x02\x94\u03CC" +
		"\x03\x02\x02\x02\x96\u03FC\x03\x02\x02\x02\x98\u03FE\x03\x02\x02\x02\x9A" +
		"\u0404\x03\x02\x02\x02\x9C\x9E\x07\x03\x02\x02\x9D\x9C\x03\x02\x02\x02" +
		"\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x03\x02\x02\x02\x9F\xA1\x05b2\x02\xA0" +
		"\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2" +
		"\xA3\x07\x02\x02\x03\xA3\x03\x03\x02\x02\x02\xA4\xA5\x05\x06\x04\x02\xA5" +
		"\x05\x03\x02\x02\x02\xA6\xBB\x05\b\x05\x02\xA7\xBB\x05 \x11\x02\xA8\xBB" +
		"\x05\f\x07\x02\xA9\xBB\x05\x1A\x0E\x02\xAA\xBB\x05&\x14\x02\xAB\xBB\x05" +
		"R*\x02\xAC\xBB\x05(\x15\x02\xAD\xBB\x05*\x16\x02\xAE\xBB\x05,\x17\x02" +
		"\xAF\xBB\x050\x19\x02\xB0\xBB\x052\x1A\x02\xB1\xBB\x054\x1B\x02\xB2\xBB" +
		"\x056\x1C\x02\xB3\xBB\x058\x1D\x02\xB4\xBB\x05D#\x02\xB5\xBB\x05:\x1E" +
		"\x02\xB6\xBB\x05F$\x02\xB7\xBB\x05H%\x02\xB8\xBB\x05N(\x02\xB9\xBB\x05" +
		"P)\x02\xBA\xA6\x03\x02\x02\x02\xBA\xA7\x03\x02\x02\x02\xBA\xA8\x03\x02" +
		"\x02\x02\xBA\xA9\x03\x02\x02\x02\xBA\xAA\x03\x02\x02\x02\xBA\xAB\x03\x02" +
		"\x02\x02\xBA\xAC\x03\x02\x02\x02\xBA\xAD\x03\x02\x02\x02\xBA\xAE\x03\x02" +
		"\x02\x02\xBA\xAF\x03\x02\x02\x02\xBA\xB0\x03\x02\x02\x02\xBA\xB1\x03\x02" +
		"\x02\x02\xBA\xB2\x03\x02\x02\x02\xBA\xB3\x03\x02\x02\x02\xBA\xB4\x03\x02" +
		"\x02\x02\xBA\xB5\x03\x02\x02\x02\xBA\xB6\x03\x02\x02\x02\xBA\xB7\x03\x02" +
		"\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xB9\x03\x02\x02\x02\xBB\x07\x03\x02" +
		"\x02\x02\xBC\xBE\x07\v\x02\x02\xBD\xBF\x05\n\x06\x02\xBE\xBD\x03\x02\x02" +
		"\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x07\r\x02" +
		"\x02\xC1\t\x03\x02\x02\x02\xC2\xC4\x05\x06\x04\x02\xC3\xC2\x03\x02\x02" +
		"\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02" +
		"\x02\xC6\v\x03\x02\x02\x02\xC7\xC8\x07k\x02\x02\xC8\xC9\x05\x0E\b\x02" +
		"\xC9\r\x03\x02\x02\x02\xCA\xCC\x05\x12\n\x02\xCB\xCA\x03\x02\x02\x02\xCB" +
		"\xCC\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xD0\x05\x14\v\x02\xCE" +
		"\xD0\x05\x10\t\x02\xCF\xCD\x03\x02\x02\x02\xCF\xCE\x03\x02\x02\x02\xD0" +
		"\xD1\x03\x02\x02\x02\xD1\xD2\x05\x16\f\x02\xD2\xD3\x05\x9AN\x02\xD3\xD7" +
		"\x03\x02\x02\x02\xD4\xD5\x07y\x02\x02\xD5\xD7\x05\x9AN\x02\xD6\xCB\x03" +
		"\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\x0F\x03\x02\x02\x02\xD8\xDE\x07" +
		"\v\x02\x02\xD9\xDA\x05\x18\r\x02\xDA\xDB\x07\x0F\x02\x02\xDB\xDD\x03\x02" +
		"\x02\x02\xDC\xD9\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02" +
		"\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE5\x03\x02\x02\x02\xE0\xDE\x03\x02" +
		"\x02\x02\xE1\xE3\x05\x18\r\x02\xE2\xE4\x07\x0F\x02\x02\xE3\xE2\x03\x02" +
		"\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6\x03\x02\x02\x02\xE5\xE1\x03\x02" +
		"\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x07\r" +
		"\x02\x02\xE8\x11\x03\x02\x02\x02\xE9\xEA\x05\x18\r\x02\xEA\xEB\x07\x0F" +
		"\x02\x02\xEB\x13\x03\x02\x02\x02\xEC\xEF\x07\x1B\x02\x02\xED\xEF\x05\x90" +
		"I\x02\xEE\xEC\x03\x02\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\xF2\x03\x02" +
		"\x02\x02\xF0\xF1\x07c\x02\x02\xF1\xF3\x05\x90I\x02\xF2\xF0\x03\x02\x02" +
		"\x02\xF2\xF3\x03\x02\x02\x02\xF3\x15\x03\x02\x02\x02\xF4\xF5\x07d\x02" +
		"\x02\xF5\xF6\x07y\x02\x02\xF6\x17\x03\x02\x02\x02\xF7\xFA\x05\x90I\x02" +
		"\xF8\xF9\x07c\x02\x02\xF9\xFB\x05\x90I\x02\xFA\xF8\x03\x02\x02\x02\xFA" +
		"\xFB\x03\x02\x02\x02\xFB\x19\x03\x02\x02\x02\xFC\xFF\x07j\x02\x02\xFD" +
		"\u0100\x05\x1C\x0F\x02\xFE\u0100\x05\x1E\x10\x02\xFF\xFD\x03\x02\x02\x02" +
		"\xFF\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x05\x9A" +
		"N\x02\u0102\u0109\x03\x02\x02\x02\u0103\u0104\x07j\x02\x02\u0104\u0105" +
		"\x07]\x02\x02\u0105\u0106\x05t;\x02\u0106\u0107\x05\x9AN\x02\u0107\u0109" +
		"\x03\x02\x02\x02\u0108\xFC\x03\x02\x02\x02\u0108\u0103\x03\x02\x02\x02" +
		"\u0109\x1B\x03\x02\x02\x02\u010A\u010B\x05\x14\v\x02\u010B\u010C\x05\x16" +
		"\f\x02\u010C\u010D\x05\x9AN\x02\u010D\u0115\x03\x02\x02\x02\u010E\u0110" +
		"\x05\x10\t\x02\u010F\u0111\x05\x16\f\x02\u0110\u010F\x03\x02\x02\x02\u0110" +
		"\u0111\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x05\x9A" +
		"N\x02\u0113\u0115\x03\x02\x02\x02\u0114\u010A\x03\x02\x02\x02\u0114\u010E" +
		"\x03\x02\x02\x02\u0115\x1D\x03\x02\x02\x02\u0116\u011A\x05 \x11\x02\u0117" +
		"\u011A\x05R*\x02\u0118\u011A\x05P)\x02\u0119\u0116\x03\x02\x02\x02\u0119" +
		"\u0117\x03\x02\x02\x02\u0119\u0118\x03\x02\x02\x02\u011A\x1F\x03\x02\x02" +
		"\x02\u011B\u011C\x05\"\x12\x02\u011C\u011D\x05\x9AN\x02\u011D!\x03\x02" +
		"\x02\x02\u011E\u011F\x05.\x18\x02\u011F\u0124\x05$\x13\x02\u0120\u0121" +
		"\x07\x0F\x02\x02\u0121\u0123\x05$\x13\x02\u0122\u0120\x03\x02\x02\x02" +
		"\u0123\u0126\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03" +
		"\x02\x02\x02\u0125#\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127" +
		"\u012A\x05v<\x02\u0128\u0129\x07\x10\x02\x02\u0129\u012B\x05t;\x02\u012A" +
		"\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B%\x03\x02\x02" +
		"\x02\u012C\u012D\x07\x0E\x02\x02\u012D\'\x03\x02\x02\x02\u012E\u012F\x06" +
		"\x15\x02\x02\u012F\u0130\x05r:\x02\u0130\u0131\x05\x9AN\x02\u0131)\x03" +
		"\x02\x02\x02\u0132\u0133\x07^\x02\x02\u0133\u0134\x07\t\x02\x02\u0134" +
		"\u0135\x05r:\x02\u0135\u0136\x07\n\x02\x02\u0136\u0139\x05\x06\x04\x02" +
		"\u0137\u0138\x07N\x02\x02\u0138\u013A\x05\x06\x04\x02\u0139\u0137\x03" +
		"\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A+\x03\x02\x02\x02\u013B" +
		"\u013C\x07J\x02\x02\u013C\u013D\x05\x06\x04\x02\u013D\u013E\x07X\x02\x02" +
		"\u013E\u013F\x07\t\x02\x02\u013F\u0140\x05r:\x02\u0140\u0141\x07\n\x02" +
		"\x02\u0141\u0142\x05\x9AN\x02\u0142\u0174\x03\x02\x02\x02\u0143\u0144" +
		"\x07X\x02\x02\u0144\u0145\x07\t\x02\x02\u0145\u0146\x05r:\x02\u0146\u0147" +
		"\x07\n\x02\x02\u0147\u0148\x05\x06\x04\x02\u0148\u0174\x03\x02\x02\x02" +
		"\u0149\u014A\x07V\x02\x02\u014A\u014D\x07\t\x02\x02\u014B\u014E\x05r:" +
		"\x02\u014C\u014E\x05\"\x12\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014C" +
		"\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02" +
		"\u014F\u0151\x07\x0E\x02\x02\u0150\u0152\x05r:\x02\u0151\u0150\x03\x02" +
		"\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153" +
		"\u0155\x07\x0E\x02\x02\u0154\u0156\x05r:\x02\u0155\u0154\x03\x02\x02\x02" +
		"\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x07" +
		"\n\x02\x02\u0158\u0174\x05\x06\x04\x02\u0159\u015A\x07V\x02\x02\u015A" +
		"\u015D\x07\t\x02\x02\u015B\u015E\x05t;\x02\u015C\u015E\x05\"\x12\x02\u015D" +
		"\u015B\x03\x02\x02\x02\u015D\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02" +
		"\x02\x02\u015F\u0160\x07a\x02\x02\u0160\u0161\x05r:\x02\u0161\u0162\x07" +
		"\n\x02\x02\u0162\u0163\x05\x06\x04\x02\u0163\u0174\x03\x02\x02\x02\u0164" +
		"\u0166\x07V\x02\x02\u0165\u0167\x07m\x02\x02\u0166\u0165\x03\x02\x02\x02" +
		"\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u016B\x07" +
		"\t\x02\x02\u0169\u016C\x05t;\x02\u016A\u016C\x05\"\x12\x02\u016B\u0169" +
		"\x03\x02\x02\x02\u016B\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02" +
		"\u016D\u016E\x05\x92J\x02\u016E\u016F\x06\x17\x03\x02\u016F\u0170\x05" +
		"r:\x02\u0170\u0171\x07\n\x02\x02\u0171\u0172\x05\x06\x04\x02\u0172\u0174" +
		"\x03\x02\x02\x02\u0173\u013B\x03\x02\x02\x02\u0173\u0143\x03\x02\x02\x02" +
		"\u0173\u0149\x03\x02\x02\x02\u0173\u0159\x03\x02\x02\x02\u0173\u0164\x03" +
		"\x02\x02\x02\u0174-\x03\x02\x02\x02\u0175\u0179\x07P\x02\x02\u0176\u0179" +
		"\x05\x98M\x02\u0177\u0179\x07i\x02\x02\u0178\u0175\x03\x02\x02\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179/\x03\x02\x02" +
		"\x02\u017A\u017D\x07U\x02\x02\u017B\u017C\x06\x19\x04\x02\u017C\u017E" +
		"\x05\x92J\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02" +
		"\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x05\x9AN\x02\u01801\x03\x02\x02" +
		"\x02\u0181\u0184\x07I\x02\x02\u0182\u0183\x06\x1A\x05\x02\u0183\u0185" +
		"\x05\x92J\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02" +
		"\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x05\x9AN\x02\u01873\x03\x02\x02" +
		"\x02\u0188\u018B\x07S\x02\x02\u0189\u018A\x06\x1B\x06\x02\u018A\u018C" +
		"\x05r:\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C" +
		"\u018D\x03\x02\x02\x02\u018D\u018E\x05\x9AN\x02\u018E5\x03\x02\x02\x02" +
		"\u018F\u0192\x07w\x02\x02\u0190\u0191\x06\x1C\x07\x02\u0191\u0193\x05" +
		"r:\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0194" +
		"\x03\x02\x02\x02\u0194\u0195\x05\x9AN\x02\u01957\x03\x02\x02\x02\u0196" +
		"\u0197\x07\\\x02\x02\u0197\u0198\x07\t\x02\x02\u0198\u0199\x05r:\x02\u0199" +
		"\u019A\x07\n\x02\x02\u019A\u019B\x05\x06\x04\x02\u019B9\x03\x02\x02\x02" +
		"\u019C\u019D\x07W\x02\x02\u019D\u019E\x07\t\x02\x02\u019E\u019F\x05r:" +
		"\x02\u019F\u01A0\x07\n\x02\x02\u01A0\u01A1\x05<\x1F\x02\u01A1;\x03\x02" +
		"\x02\x02\u01A2\u01A4\x07\v\x02\x02\u01A3\u01A5\x05> \x02\u01A4\u01A3\x03" +
		"\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01AA\x03\x02\x02\x02\u01A6" +
		"\u01A8\x05B\"\x02\u01A7\u01A9\x05> \x02\u01A8\u01A7\x03\x02\x02\x02\u01A8" +
		"\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u01A6\x03\x02" +
		"\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC" +
		"\u01AD\x07\r\x02\x02\u01AD=\x03\x02\x02\x02\u01AE\u01B0\x05@!\x02\u01AF" +
		"\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01AF\x03\x02" +
		"\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2?\x03\x02\x02\x02\u01B3\u01B4" +
		"\x07M\x02\x02\u01B4\u01B5\x05r:\x02\u01B5\u01B7\x07\x12\x02\x02\u01B6" +
		"\u01B8\x05\n\x06\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02" +
		"\x02\u01B8A\x03\x02\x02\x02\u01B9\u01BA\x07]\x02\x02\u01BA\u01BC\x07\x12" +
		"\x02\x02\u01BB\u01BD\x05\n\x06\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD" +
		"\x03\x02\x02\x02\u01BDC\x03\x02\x02\x02\u01BE\u01BF\x05\x92J\x02\u01BF" +
		"\u01C0\x07\x12";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01C0\u01C1\x05\x06\x04\x02\u01C1E\x03\x02\x02\x02\u01C2\u01C3" +
		"\x07_\x02\x02\u01C3\u01C4\x06$\b\x02\u01C4\u01C5\x05r:\x02\u01C5\u01C6" +
		"\x05\x9AN\x02\u01C6G\x03\x02\x02\x02\u01C7\u01C8\x07b\x02\x02\u01C8\u01CE" +
		"\x05\b\x05\x02\u01C9\u01CB\x05J&\x02\u01CA\u01CC\x05L\'\x02\u01CB\u01CA" +
		"\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02" +
		"\u01CD\u01CF\x05L\'\x02\u01CE\u01C9\x03\x02\x02\x02\u01CE\u01CD\x03\x02" +
		"\x02\x02\u01CFI\x03\x02\x02\x02\u01D0\u01D6\x07Q\x02\x02\u01D1\u01D3\x07" +
		"\t\x02\x02\u01D2\u01D4\x05v<\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3\u01D4" +
		"\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D7\x07\n\x02\x02" +
		"\u01D6\u01D1\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x03" +
		"\x02\x02\x02\u01D8\u01D9\x05\b\x05\x02\u01D9K\x03\x02\x02\x02\u01DA\u01DB" +
		"\x07R\x02\x02\u01DB\u01DC\x05\b\x05\x02\u01DCM\x03\x02\x02\x02\u01DD\u01DE" +
		"\x07Y\x02\x02\u01DE\u01DF\x05\x9AN\x02\u01DFO\x03\x02\x02\x02\u01E0\u01E2" +
		"\x07l\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02" +
		"\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E5\x07Z\x02\x02\u01E4\u01E6\x07" +
		"\x1B\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6" +
		"\u01E7\x03\x02\x02\x02\u01E7\u01E8\x05\x92J\x02\u01E8\u01EA\x07\t\x02" +
		"\x02\u01E9\u01EB\x05Z.\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA\u01EB\x03" +
		"\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01ED\x07\n\x02\x02\u01ED" +
		"\u01EE\x05`1\x02\u01EEQ\x03\x02\x02\x02\u01EF\u01F0\x07e\x02\x02\u01F0" +
		"\u01F1\x05\x92J\x02\u01F1\u01F2\x05T+\x02\u01F2S\x03\x02\x02\x02\u01F3" +
		"\u01F4\x07g\x02\x02\u01F4\u01F6\x05t;\x02\u01F5\u01F3\x03\x02\x02\x02" +
		"\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01FB\x07" +
		"\v\x02\x02\u01F8\u01FA\x05V,\x02\u01F9\u01F8\x03\x02\x02\x02\u01FA\u01FD" +
		"\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02" +
		"\u01FC\u01FE\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FE\u01FF\x07" +
		"\r\x02\x02\u01FFU\x03\x02\x02\x02\u0200\u0205\x07v\x02\x02\u0201\u0202" +
		"\x06,\t\x02\u0202\u0205\x05\x92J\x02\u0203\u0205\x07l\x02\x02\u0204\u0200" +
		"\x03\x02\x02\x02\u0204\u0201\x03\x02\x02\x02\u0204\u0203\x03\x02\x02\x02" +
		"\u0205\u0208\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0206\u0207\x03" +
		"\x02\x02\x02\u0207\u020F\x03\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0209" +
		"\u0210\x05X-\x02\u020A\u020B\x05v<\x02\u020B\u020C\x07\x10\x02\x02\u020C" +
		"\u020D\x05x=\x02\u020D\u020E\x07\x0E\x02\x02\u020E\u0210\x03\x02\x02\x02" +
		"\u020F\u0209\x03\x02\x02\x02\u020F\u020A\x03\x02\x02\x02\u0210\u021A\x03" +
		"\x02\x02\x02\u0211\u021A\x05&\x14\x02\u0212\u0214\x07 \x02\x02\u0213\u0212" +
		"\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02" +
		"\u0215\u0216\x05l7\x02\u0216\u0217\x07\x10\x02\x02\u0217\u0218\x05t;\x02" +
		"\u0218\u021A\x03\x02\x02\x02\u0219\u0206\x03\x02\x02\x02\u0219\u0211\x03" +
		"\x02\x02\x02\u0219\u0213\x03\x02\x02\x02\u021AW\x03\x02\x02\x02\u021B" +
		"\u021D\x07\x1B\x02\x02\u021C\u021B\x03\x02\x02\x02\u021C\u021D\x03\x02" +
		"\x02\x02\u021D\u021F\x03\x02\x02\x02\u021E\u0220\x07 \x02\x02\u021F\u021E" +
		"\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02" +
		"\u0221\u0222\x05l7\x02\u0222\u0224\x07\t\x02\x02\u0223\u0225\x05Z.\x02" +
		"\u0224\u0223\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0226\x03" +
		"\x02\x02\x02\u0226\u0227\x07\n\x02\x02\u0227\u0228\x05`1\x02\u0228\u0243" +
		"\x03\x02\x02\x02\u0229\u022B\x07\x1B\x02\x02\u022A\u0229\x03\x02\x02\x02" +
		"\u022A\u022B\x03\x02\x02\x02\u022B\u022D\x03\x02\x02\x02\u022C\u022E\x07" +
		" \x02\x02\u022D\u022C\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E" +
		"\u022F\x03\x02\x02\x02\u022F\u0230\x05\x8CG\x02\u0230\u0231\x07\t\x02" +
		"\x02\u0231\u0232\x07\n\x02\x02\u0232\u0233\x05`1\x02\u0233\u0243\x03\x02" +
		"\x02\x02\u0234\u0236\x07\x1B\x02\x02\u0235\u0234\x03\x02\x02\x02\u0235" +
		"\u0236\x03\x02\x02\x02\u0236\u0238\x03\x02\x02\x02\u0237\u0239\x07 \x02" +
		"\x02\u0238\u0237\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023A" +
		"\x03\x02\x02\x02\u023A\u023B\x05\x8EH\x02\u023B\u023D\x07\t\x02\x02\u023C" +
		"\u023E\x05Z.\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02" +
		"\u023E\u023F\x03\x02\x02\x02\u023F\u0240\x07\n\x02\x02\u0240\u0241\x05" +
		"`1\x02\u0241\u0243\x03\x02\x02\x02\u0242\u021C\x03\x02\x02\x02\u0242\u022A" +
		"\x03\x02\x02\x02\u0242\u0235\x03\x02\x02\x02\u0243Y\x03\x02\x02\x02\u0244" +
		"\u0249\x05\\/\x02\u0245\u0246\x07\x0F\x02\x02\u0246\u0248\x05\\/\x02\u0247" +
		"\u0245\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02" +
		"\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024E\x03\x02\x02\x02\u024B" +
		"\u0249\x03\x02\x02\x02\u024C\u024D\x07\x0F\x02\x02\u024D\u024F\x05^0\x02" +
		"\u024E\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0252\x03" +
		"\x02\x02\x02\u0250\u0252\x05^0\x02\u0251\u0244\x03\x02\x02\x02\u0251\u0250" +
		"\x03\x02\x02\x02\u0252[\x03\x02\x02\x02\u0253\u0256\x05v<\x02\u0254\u0255" +
		"\x07\x10\x02\x02\u0255\u0257\x05t;\x02\u0256\u0254\x03\x02\x02\x02\u0256" +
		"\u0257\x03\x02\x02\x02\u0257]\x03\x02\x02\x02\u0258\u0259\x07\x13\x02" +
		"\x02\u0259\u025A\x05t;\x02\u025A_\x03\x02\x02\x02\u025B\u025D\x07\v\x02" +
		"\x02\u025C\u025E\x05b2\x02\u025D\u025C\x03\x02\x02\x02\u025D\u025E\x03" +
		"\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x07\r\x02\x02\u0260" +
		"a\x03\x02\x02\x02\u0261\u0263\x05\x04\x03\x02\u0262\u0261\x03\x02\x02" +
		"\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0265" +
		"\x03\x02\x02\x02\u0265c\x03\x02\x02\x02\u0266\u0267\x07\x07\x02\x02\u0267" +
		"\u0268\x05f4\x02\u0268\u0269\x07\b\x02\x02\u0269e\x03\x02\x02\x02\u026A" +
		"\u026C\x07\x0F\x02\x02\u026B\u026A\x03\x02\x02\x02\u026C\u026F\x03\x02" +
		"\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E" +
		"\u0271\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u0270\u0272\x05h5\x02" +
		"\u0271\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u027B\x03" +
		"\x02\x02\x02\u0273\u0275\x07\x0F\x02\x02\u0274\u0273\x03\x02\x02\x02\u0275" +
		"\u0276\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02\u0276\u0277\x03\x02" +
		"\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027A\x05h5\x02\u0279\u0274" +
		"\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02" +
		"\u027B\u027C\x03\x02\x02\x02\u027C\u0281\x03\x02\x02\x02\u027D\u027B\x03" +
		"\x02\x02\x02\u027E\u0280\x07\x0F\x02\x02\u027F\u027E\x03\x02\x02\x02\u0280" +
		"\u0283\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02" +
		"\x02\x02\u0282g\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0284\u0286" +
		"\x07\x13\x02\x02\u0285\u0284\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02" +
		"\u0286\u0287\x03\x02\x02\x02\u0287\u0288\x05t;\x02\u0288i\x03\x02\x02" +
		"\x02\u0289\u028A\x05l7\x02\u028A\u028B\x07\x12\x02\x02\u028B\u028C\x05" +
		"t;\x02\u028C\u02B1\x03\x02\x02\x02\u028D\u028E\x07\x07\x02\x02\u028E\u028F" +
		"\x05t;\x02\u028F\u0290\x07\b\x02\x02\u0290\u0291\x07\x12\x02\x02\u0291" +
		"\u0292\x05t;\x02\u0292\u02B1\x03\x02\x02\x02\u0293\u0295\x07l\x02\x02" +
		"\u0294\u0293\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0297\x03" +
		"\x02\x02\x02\u0296\u0298\x07\x1B\x02\x02\u0297\u0296\x03\x02\x02\x02\u0297" +
		"\u0298\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x05l7\x02" +
		"\u029A\u029C\x07\t\x02\x02\u029B\u029D\x05Z.\x02\u029C\u029B\x03\x02\x02" +
		"\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u029F" +
		"\x07\n\x02\x02\u029F\u02A0\x05`1\x02\u02A0\u02B1\x03\x02\x02\x02\u02A1" +
		"\u02A2\x05\x8CG\x02\u02A2\u02A3\x07\t\x02\x02\u02A3\u02A4\x07\n\x02\x02" +
		"\u02A4\u02A5\x05`1\x02\u02A5\u02B1\x03\x02\x02\x02\u02A6\u02A7\x05\x8E" +
		"H\x02\u02A7\u02A8\x07\t\x02\x02\u02A8\u02A9\x05\\/\x02\u02A9\u02AA\x07" +
		"\n\x02\x02\u02AA\u02AB\x05`1\x02\u02AB\u02B1\x03\x02\x02\x02\u02AC\u02AE" +
		"\x07\x13\x02\x02\u02AD\u02AC\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02" +
		"\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B1\x05t;\x02\u02B0\u0289\x03\x02" +
		"\x02\x02\u02B0\u028D\x03\x02\x02\x02\u02B0\u0294\x03\x02\x02\x02\u02B0" +
		"\u02A1\x03\x02\x02\x02\u02B0\u02A6\x03\x02\x02\x02\u02B0\u02AD\x03\x02" +
		"\x02\x02\u02B1k\x03\x02\x02\x02\u02B2\u02BA\x05\x90I\x02\u02B3\u02BA\x07" +
		"y\x02\x02\u02B4\u02BA\x05\x88E\x02\u02B5\u02B6\x07\x07\x02\x02\u02B6\u02B7" +
		"\x05t;\x02\u02B7\u02B8\x07\b\x02\x02\u02B8\u02BA\x03\x02\x02\x02\u02B9" +
		"\u02B2\x03\x02\x02\x02\u02B9\u02B3\x03\x02\x02\x02\u02B9\u02B4\x03\x02" +
		"\x02\x02\u02B9\u02B5\x03\x02\x02\x02\u02BAm\x03\x02\x02\x02\u02BB\u02C7" +
		"\x07\t\x02\x02\u02BC\u02C1\x05p9\x02\u02BD\u02BE\x07\x0F\x02\x02\u02BE" +
		"\u02C0\x05p9\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0\u02C3\x03\x02\x02\x02" +
		"\u02C1\u02BF\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C5\x03" +
		"\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C6\x07\x0F\x02\x02\u02C5" +
		"\u02C4\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02C8\x03\x02" +
		"\x02\x02\u02C7\u02BC\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8" +
		"\u02C9\x03\x02\x02\x02\u02C9\u02CA\x07\n\x02\x02\u02CAo\x03\x02\x02\x02" +
		"\u02CB\u02CD\x07\x13\x02\x02\u02CC\u02CB\x03\x02\x02\x02\u02CC\u02CD\x03" +
		"\x02\x02\x02\u02CD\u02D0\x03\x02\x02\x02\u02CE\u02D1\x05t;\x02\u02CF\u02D1" +
		"\x05\x92J\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02CF\x03\x02\x02\x02" +
		"\u02D1q\x03\x02\x02\x02\u02D2\u02D7\x05t;\x02\u02D3\u02D4\x07\x0F\x02" +
		"\x02\u02D4\u02D6\x05t;\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02D9\x03" +
		"\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8" +
		"s\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA\u02DB\b;\x01\x02\u02DB" +
		"\u030F\x05z>\x02\u02DC\u02DE\x07e\x02\x02\u02DD\u02DF\x05\x92J\x02\u02DE" +
		"\u02DD\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E0\x03\x02" +
		"\x02\x02\u02E0\u030F\x05T+\x02\u02E1\u02E2\x07O\x02\x02\u02E2\u02E3\x05" +
		"t;\x02\u02E3\u02E4\x05n8\x02\u02E4\u030F\x03\x02\x02\x02\u02E5\u02E6\x07" +
		"O\x02\x02\u02E6\u030F\x05t;,\u02E7\u02E8\x07O\x02\x02\u02E8\u02E9\x07" +
		"\x14\x02\x02\u02E9\u030F\x05\x92J\x02\u02EA\u02EB\x07`\x02\x02\u02EB\u030F" +
		"\x05t;\'\u02EC\u02ED\x07T\x02\x02\u02ED\u030F\x05t;&\u02EE\u02EF\x07L" +
		"\x02\x02\u02EF\u030F\x05t;%\u02F0\u02F1\x07\x15\x02\x02\u02F1\u030F\x05" +
		"t;$\u02F2\u02F3\x07\x16\x02\x02\u02F3\u030F\x05t;#\u02F4\u02F5\x07\x17" +
		"\x02\x02\u02F5\u030F\x05t;\"\u02F6\u02F7\x07\x18\x02\x02\u02F7\u030F\x05" +
		"t;!\u02F8\u02F9\x07\x19\x02\x02\u02F9\u030F\x05t; \u02FA\u02FB\x07\x1A" +
		"\x02\x02\u02FB\u030F\x05t;\x1F\u02FC\u02FD\x07m\x02\x02\u02FD\u030F\x05" +
		"t;\x1E\u02FE\u02FF\x07k\x02\x02\u02FF\u0300\x07\t\x02\x02\u0300\u0301" +
		"\x05t;\x02\u0301\u0302\x07\n\x02\x02\u0302\u030F\x03\x02\x02\x02\u0303" +
		"\u030F\x056\x1C\x02\u0304\u030F\x07[\x02\x02\u0305\u030F\x05\x92J\x02" +
		"\u0306\u030F\x07h\x02\x02\u0307\u030F\x05\x82B\x02\u0308\u030F\x05d3\x02" +
		"\u0309\u030F\x05x=\x02\u030A\u030B\x07\t\x02\x02\u030B\u030C\x05r:\x02" +
		"\u030C\u030D\x07\n\x02\x02\u030D\u030F\x03\x02\x02\x02\u030E\u02DA\x03" +
		"\x02\x02\x02\u030E\u02DC\x03\x02\x02\x02\u030E\u02E1\x03\x02\x02\x02\u030E" +
		"\u02E5\x03\x02\x02\x02\u030E\u02E7\x03\x02\x02\x02\u030E\u02EA\x03\x02" +
		"\x02\x02\u030E\u02EC\x03\x02\x02\x02\u030E\u02EE\x03\x02\x02\x02\u030E" +
		"\u02F0\x03\x02\x02\x02\u030E\u02F2\x03\x02\x02\x02\u030E\u02F4\x03\x02" +
		"\x02\x02\u030E\u02F6\x03\x02\x02\x02\u030E\u02F8\x03\x02\x02\x02\u030E" +
		"\u02FA\x03\x02\x02\x02\u030E\u02FC\x03\x02\x02\x02\u030E\u02FE\x03\x02" +
		"\x02\x02\u030E\u0303\x03\x02\x02\x02\u030E\u0304\x03\x02\x02\x02\u030E" +
		"\u0305\x03\x02\x02\x02\u030E\u0306\x03\x02\x02\x02\u030E\u0307\x03\x02" +
		"\x02\x02\u030E\u0308\x03\x02\x02\x02\u030E\u0309\x03\x02\x02\x02\u030E" +
		"\u030A\x03\x02\x02\x02\u030F\u0361\x03\x02\x02\x02\u0310\u0311\f\x1D\x02" +
		"\x02\u0311\u0312\x07\x1E\x02\x02\u0312\u0360\x05t;\x1D\u0313\u0314\f\x1C" +
		"\x02\x02\u0314\u0315\t\x02\x02\x02\u0315\u0360\x05t;\x1D\u0316\u0317\f" +
		"\x1B\x02\x02\u0317\u0318\t\x03\x02\x02\u0318\u0360\x05t;\x1C\u0319\u031A" +
		"\f\x1A\x02\x02\u031A\u031B\x07\x1F\x02\x02\u031B\u0360\x05t;\x1B\u031C" +
		"\u031D\f\x19\x02\x02\u031D\u031E\t\x04\x02\x02\u031E\u0360\x05t;\x1A\u031F" +
		"\u0320\f\x18\x02\x02\u0320\u0321\t\x05\x02\x02\u0321\u0360\x05t;\x19\u0322" +
		"\u0323\f\x17\x02\x02\u0323\u0324\x07K\x02\x02\u0324\u0360\x05t;\x18\u0325" +
		"\u0326\f\x16\x02\x02\u0326\u0327\x07a\x02\x02\u0327\u0360\x05t;\x17\u0328" +
		"\u0329\f\x15\x02\x02\u0329\u032A\t\x06\x02\x02\u032A\u0360\x05t;\x16\u032B" +
		"\u032C\f\x14\x02\x02\u032C\u032D\x07,\x02\x02\u032D\u0360\x05t;\x15\u032E" +
		"\u032F\f\x13\x02\x02\u032F\u0330\x07-\x02\x02\u0330\u0360\x05t;\x14\u0331" +
		"\u0332\f\x12\x02\x02\u0332\u0333\x07.\x02\x02\u0333\u0360\x05t;\x13\u0334" +
		"\u0335\f\x11\x02\x02\u0335\u0336\x07/\x02\x02\u0336\u0360\x05t;\x12\u0337" +
		"\u0338\f\x10\x02\x02\u0338\u0339\x070\x02\x02\u0339\u0360\x05t;\x11\u033A" +
		"\u033B\f\x0F\x02\x02\u033B\u033C\x07\x11\x02\x02\u033C\u033D\x05t;\x02" +
		"\u033D\u033E\x07\x12\x02\x02\u033E\u033F\x05t;\x10\u033F\u0360\x03\x02" +
		"\x02\x02\u0340\u0341\f\x0E\x02\x02\u0341\u0342\x07\x10\x02\x02\u0342\u0360" +
		"\x05t;\x0E\u0343\u0344\f\r\x02\x02\u0344\u0345\x05\x80A\x02\u0345\u0346" +
		"\x05t;\r\u0346\u0360\x03\x02\x02\x02\u0347\u0348\f/\x02\x02\u0348\u0349" +
		"\x07\x07\x02\x02\u0349\u034A\x05r:\x02\u034A\u034B\x07\b\x02\x02\u034B" +
		"\u0360\x03\x02\x02\x02\u034C\u034E\f.\x02\x02\u034D\u034F\x07\x11\x02" +
		"\x02\u034E\u034D\x03\x02\x02\x02\u034E\u034F\x03\x02\x02\x02\u034F\u0350" +
		"\x03\x02\x02\x02\u0350\u0352\x07\x14\x02\x02\u0351\u0353\x07 \x02\x02" +
		"\u0352\u0351\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0354\x03" +
		"\x02\x02\x02\u0354\u0360\x05\x90I\x02\u0355\u0356\f+\x02\x02\u0356\u0360" +
		"\x05n8\x02\u0357\u0358\f)\x02\x02\u0358\u0359\x06;\x1F\x02\u0359\u0360" +
		"\x07\x15\x02\x02\u035A\u035B\f(\x02\x02\u035B\u035C\x06;!\x02\u035C\u0360" +
		"\x07\x16\x02\x02\u035D\u035E\f\v\x02\x02\u035E\u0360\x05\x84C\x02\u035F" +
		"\u0310\x03\x02\x02\x02\u035F\u0313\x03\x02\x02\x02\u035F\u0316\x03\x02" +
		"\x02\x02\u035F\u0319\x03\x02\x02\x02\u035F\u031C\x03\x02\x02\x02\u035F" +
		"\u031F\x03\x02\x02\x02\u035F\u0322\x03\x02\x02\x02\u035F\u0325\x03\x02" +
		"\x02\x02\u035F\u0328\x03\x02\x02\x02\u035F\u032B\x03\x02\x02\x02\u035F" +
		"\u032E\x03\x02\x02\x02\u035F\u0331\x03\x02\x02\x02\u035F\u0334\x03\x02" +
		"\x02\x02\u035F\u0337\x03\x02\x02\x02\u035F\u033A\x03\x02\x02\x02\u035F" +
		"\u0340\x03\x02\x02\x02\u035F\u0343\x03\x02\x02\x02\u035F\u0347\x03\x02" +
		"\x02\x02\u035F\u034C\x03\x02\x02\x02\u035F\u0355\x03\x02\x02\x02\u035F" +
		"\u0357\x03\x02\x02\x02\u035F\u035A\x03\x02\x02\x02\u035F\u035D\x03\x02" +
		"\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0361" +
		"\u0362\x03\x02\x02\x02\u0362u\x03\x02\x02\x02\u0363\u0361\x03\x02\x02" +
		"\x02\u0364\u0368\x05\x92J\x02\u0365\u0368\x05d3\x02\u0366\u0368\x05x=" +
		"\x02\u0367\u0364\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0367\u0366" +
		"\x03\x02\x02\x02\u0368w\x03\x02\x02\x02\u0369\u0375\x07\v\x02\x02\u036A" +
		"\u036F\x05j6\x02\u036B\u036C\x07\x0F\x02\x02\u036C\u036E\x05j6\x02\u036D" +
		"\u036B\x03\x02\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D\x03\x02" +
		"\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0373\x03\x02\x02\x02\u0371" +
		"\u036F\x03\x02\x02\x02\u0372\u0374\x07\x0F\x02\x02\u0373\u0372\x03\x02" +
		"\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0376\x03\x02\x02\x02\u0375" +
		"\u036A\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377\x03\x02" +
		"\x02\x02\u0377\u0378\x07\r\x02\x02\u0378y\x03\x02\x02\x02\u0379\u038F" +
		"\x05P)\x02\u037A\u037C\x07l\x02\x02\u037B\u037A\x03\x02\x02\x02\u037B" +
		"\u037C\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037F\x07Z\x02" +
		"\x02\u037E\u0380\x07\x1B\x02\x02\u037F\u037E\x03\x02\x02\x02\u037F\u0380" +
		"\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381\u0383\x07\t\x02\x02" +
		"\u0382\u0384\x05Z.\x02\u0383\u0382\x03\x02\x02\x02\u0383\u0384\x03\x02" +
		"\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0386\x07\n\x02\x02\u0386\u038F" +
		"\x05`1\x02\u0387\u0389\x07l\x02\x02\u0388\u0387\x03\x02\x02\x02\u0388" +
		"\u0389\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u038B\x05|?\x02" +
		"\u038B\u038C\x07=\x02\x02\u038C\u038D\x05~@\x02\u038D\u038F\x03\x02\x02" +
		"\x02\u038E\u0379\x03\x02\x02\x02\u038E\u037B\x03\x02\x02\x02\u038E\u0388" +
		"\x03\x02\x02\x02\u038F{\x03\x02\x02\x02\u0390\u0397\x05\x92J\x02\u0391" +
		"\u0393\x07\t\x02\x02\u0392\u0394\x05Z.\x02\u0393\u0392\x03\x02\x02\x02" +
		"\u0393\u0394\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u0397\x07" +
		"\n\x02\x02\u0396\u0390\x03\x02\x02\x02\u0396\u0391\x03\x02\x02\x02\u0397" +
		"}\x03\x02\x02\x02\u0398\u039B\x05t;\x02\u0399\u039B\x05`1\x02\u039A\u0398" +
		"\x03\x02\x02\x02\u039A\u0399\x03\x02\x02\x02\u039B\x7F\x03\x02\x02\x02" +
		"\u039C\u039D\t\x07\x02\x02\u039D\x81\x03\x02\x02\x02\u039E\u03A6\x07>" +
		"\x02\x02\u039F\u03A6\x07?\x02\x02\u03A0\u03A6\x07y\x02\x02\u03A1\u03A6" +
		"\x05\x84C\x02\u03A2\u03A6\x07\x06\x02\x02\u03A3\u03A6\x05\x88E\x02\u03A4" +
		"\u03A6\x05\x8AF\x02\u03A5\u039E\x03\x02\x02\x02\u03A5\u039F\x03\x02\x02" +
		"\x02\u03A5\u03A0\x03\x02\x02\x02\u03A5\u03A1\x03\x02\x02\x02\u03A5\u03A2" +
		"\x03\x02\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A4\x03\x02\x02\x02" +
		"\u03A6\x83\x03\x02\x02\x02\u03A7\u03AB\x07z\x02\x02\u03A8\u03AA\x05\x86" +
		"D\x02\u03A9\u03A8\x03\x02\x02\x02\u03AA\u03AD\x03\x02\x02\x02\u03AB\u03A9" +
		"\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AE\x03\x02\x02\x02" +
		"\u03AD\u03AB\x03\x02\x02\x02\u03AE\u03AF\x07z\x02\x02\u03AF\x85\x03\x02" +
		"\x02\x02\u03B0\u03B6\x07\x81\x02\x02\u03B1\u03B2\x07\x80\x02\x02\u03B2" +
		"\u03B3\x05t;\x02\u03B3\u03B4\x07\f\x02\x02\u03B4\u03B6\x03\x02\x02\x02" +
		"\u03B5\u03B0\x03\x02\x02\x02\u03B5\u03B1\x03\x02\x02\x02\u03B6\x87\x03" +
		"\x02\x02\x02\u03B7\u03B8\t\b\x02\x02\u03B8\x89\x03\x02\x02\x02\u03B9\u03BA" +
		"\t\t\x02\x02\u03BA\x8B\x03\x02\x02\x02\u03BB\u03BC\x06G#\x02\u03BC\u03BD" +
		"\x05\x92J\x02\u03BD\u03BE\x05l7\x02\u03BE\x8D\x03\x02\x02\x02\u03BF\u03C0" +
		"\x06H$\x02\u03C0\u03C1\x05\x92J\x02\u03C1\u03C2\x05l7\x02\u03C2\x8F\x03" +
		"\x02\x02\x02\u03C3\u03C6\x05\x92J\x02\u03C4\u03C6\x05\x94K\x02\u03C5\u03C3" +
		"\x03\x02\x02\x02\u03C5\u03C4\x03\x02\x02\x02\u03C6\x91\x03\x02\x02\x02" +
		"\u03C7\u03C8\t\n\x02\x02\u03C8\x93\x03\x02\x02\x02\u03C9\u03CD\x05\x96" +
		"L\x02\u03CA\u03CD\x07>\x02\x02\u03CB\u03CD\x07?\x02\x02\u03CC\u03C9\x03" +
		"\x02\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CC\u03CB\x03\x02\x02\x02\u03CD" +
		"\x95\x03\x02\x02\x02\u03CE\u03FD\x07I\x02\x02\u03CF\u03FD\x07J\x02\x02" +
		"\u03D0\u03FD\x07K\x02\x02\u03D1\u03FD\x07L\x02\x02\u03D2\u03FD\x07M\x02" +
		"\x02\u03D3\u03FD\x07N\x02\x02\u03D4\u03FD\x07O\x02\x02\u03D5\u03FD\x07" +
		"P\x02\x02\u03D6\u03FD\x07Q\x02\x02\u03D7\u03FD\x07R\x02\x02\u03D8\u03FD" +
		"\x07S\x02\x02\u03D9\u03FD\x07T\x02\x02\u03DA\u03FD\x07U\x02\x02\u03DB" +
		"\u03FD\x07V\x02\x02\u03DC\u03FD\x07W\x02\x02\u03DD\u03FD\x07X\x02\x02" +
		"\u03DE\u03FD\x07Y\x02\x02\u03DF\u03FD\x07Z\x02\x02\u03E0\u03FD\x07[\x02" +
		"\x02\u03E1\u03FD\x07\\\x02\x02\u03E2\u03FD\x07]\x02\x02\u03E3\u03FD\x07" +
		"^\x02\x02\u03E4\u03FD\x07_\x02\x02\u03E5\u03FD\x07`\x02\x02\u03E6\u03FD" +
		"\x07a\x02\x02\u03E7\u03FD\x07b\x02\x02\u03E8\u03FD\x07e\x02\x02\u03E9" +
		"\u03FD\x07f\x02\x02\u03EA\u03FD\x07g\x02\x02\u03EB\u03FD\x07h\x02\x02" +
		"\u03EC\u03FD\x07i\x02\x02\u03ED\u03FD\x07j\x02\x02\u03EE\u03FD\x07k\x02" +
		"\x02\u03EF\u03FD\x07n\x02\x02\u03F0\u03FD\x05\x98M\x02\u03F1\u03FD\x07" +
		"q\x02\x02\u03F2\u03FD\x07r\x02\x02\u03F3\u03FD\x07s\x02\x02\u03F4\u03FD" +
		"\x07t\x02\x02\u03F5\u03FD\x07u\x02\x02\u03F6\u03FD\x07v\x02\x02\u03F7" +
		"\u03FD\x07w\x02\x02\u03F8\u03FD\x07l\x02\x02\u03F9\u03FD\x07m\x02\x02" +
		"\u03FA\u03FD\x07d\x02\x02\u03FB\u03FD\x07c\x02\x02\u03FC\u03CE\x03\x02" +
		"\x02\x02\u03FC\u03CF\x03\x02\x02\x02\u03FC\u03D0\x03\x02\x02\x02\u03FC" +
		"\u03D1\x03\x02\x02\x02\u03FC\u03D2\x03\x02\x02\x02\u03FC\u03D3\x03\x02" +
		"\x02\x02\u03FC\u03D4\x03\x02\x02\x02\u03FC\u03D5\x03\x02\x02\x02\u03FC" +
		"\u03D6\x03\x02\x02\x02\u03FC\u03D7\x03\x02\x02\x02\u03FC\u03D8\x03\x02" +
		"\x02\x02\u03FC\u03D9\x03\x02\x02\x02\u03FC\u03DA\x03\x02\x02\x02\u03FC" +
		"\u03DB\x03\x02\x02\x02\u03FC\u03DC\x03\x02\x02\x02\u03FC\u03DD\x03\x02" +
		"\x02\x02\u03FC\u03DE\x03\x02\x02\x02\u03FC\u03DF\x03\x02\x02\x02\u03FC" +
		"\u03E0\x03\x02\x02\x02\u03FC\u03E1\x03\x02\x02\x02\u03FC\u03E2\x03\x02" +
		"\x02\x02\u03FC\u03E3\x03\x02\x02\x02\u03FC\u03E4\x03\x02\x02\x02\u03FC" +
		"\u03E5\x03\x02\x02\x02\u03FC\u03E6\x03\x02\x02\x02\u03FC\u03E7\x03\x02" +
		"\x02\x02\u03FC\u03E8\x03\x02\x02\x02\u03FC\u03E9\x03\x02\x02\x02\u03FC" +
		"\u03EA\x03\x02\x02\x02\u03FC\u03EB\x03\x02\x02\x02\u03FC\u03EC\x03\x02" +
		"\x02\x02\u03FC\u03ED\x03\x02\x02\x02\u03FC\u03EE\x03\x02\x02\x02\u03FC" +
		"\u03EF\x03\x02\x02\x02\u03FC\u03F0\x03\x02\x02\x02\u03FC\u03F1\x03\x02" +
		"\x02\x02\u03FC\u03F2\x03\x02\x02\x02\u03FC\u03F3\x03\x02\x02\x02\u03FC" +
		"\u03F4\x03\x02\x02\x02\u03FC\u03F5\x03\x02\x02\x02\u03FC\u03F6\x03\x02" +
		"\x02\x02\u03FC\u03F7\x03\x02\x02\x02\u03FC\u03F8\x03\x02\x02\x02\u03FC" +
		"\u03F9\x03\x02\x02\x02\u03FC\u03FA\x03\x02\x02\x02\u03FC\u03FB\x03\x02" +
		"\x02\x02\u03FD\x97\x03\x02\x02\x02\u03FE\u03FF\t\v\x02\x02\u03FF\x99\x03" +
		"\x02\x02\x02\u0400\u0405\x07\x0E\x02\x02\u0401\u0405\x07\x02\x02\x03\u0402" +
		"\u0405\x06N%\x02\u0403\u0405\x06N&\x02\u0404\u0400\x03\x02\x02\x02\u0404" +
		"\u0401\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0404\u0403\x03\x02" +
		"\x02\x02\u0405\x9B\x03\x02\x02\x02r\x9D\xA0\xBA\xBE\xC5\xCB\xCF\xD6\xDE" +
		"\xE3\xE5\xEE\xF2\xFA\xFF\u0108\u0110\u0114\u0119\u0124\u012A\u0139\u014D" +
		"\u0151\u0155\u015D\u0166\u016B\u0173\u0178\u017D\u0184\u018B\u0192\u01A4" +
		"\u01A8\u01AA\u01B1\u01B7\u01BC\u01CB\u01CE\u01D3\u01D6\u01E1\u01E5\u01EA" +
		"\u01F5\u01FB\u0204\u0206\u020F\u0213\u0219\u021C\u021F\u0224\u022A\u022D" +
		"\u0235\u0238\u023D\u0242\u0249\u024E\u0251\u0256\u025D\u0264\u026D\u0271" +
		"\u0276\u027B\u0281\u0285\u0294\u0297\u029C\u02AD\u02B0\u02B9\u02C1\u02C5" +
		"\u02C7\u02CC\u02D0\u02D7\u02DE\u030E\u034E\u0352\u035F\u0361\u0367\u036F" +
		"\u0373\u0375\u037B\u037F\u0383\u0388\u038E\u0393\u0396\u039A\u03A5\u03AB" +
		"\u03B5\u03C5\u03CC\u03FC\u0404";
	public static readonly _serializedATN: string = Utils.join(
		[
			JavaScriptParser._serializedATNSegment0,
			JavaScriptParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaScriptParser.__ATN) {
			JavaScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaScriptParser._serializedATN));
		}

		return JavaScriptParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JavaScriptParser.EOF, 0); }
	public HashBangLine(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.HashBangLine, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_program; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_sourceElement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSourceElement) {
			listener.enterSourceElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSourceElement) {
			listener.exitSourceElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceElement) {
			return visitor.visitSourceElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public importStatement(): ImportStatementContext | undefined {
		return this.tryGetRuleContext(0, ImportStatementContext);
	}
	public exportStatement(): ExportStatementContext | undefined {
		return this.tryGetRuleContext(0, ExportStatementContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public yieldStatement(): YieldStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldStatementContext);
	}
	public withStatement(): WithStatementContext | undefined {
		return this.tryGetRuleContext(0, WithStatementContext);
	}
	public labelledStatement(): LabelledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabelledStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public debuggerStatement(): DebuggerStatementContext | undefined {
		return this.tryGetRuleContext(0, DebuggerStatementContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_statement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_statementList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public Import(): TerminalNode { return this.getToken(JavaScriptParser.Import, 0); }
	public importFromBlock(): ImportFromBlockContext {
		return this.getRuleContext(0, ImportFromBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportFromBlockContext extends ParserRuleContext {
	public importFrom(): ImportFromContext | undefined {
		return this.tryGetRuleContext(0, ImportFromContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public importNamespace(): ImportNamespaceContext | undefined {
		return this.tryGetRuleContext(0, ImportNamespaceContext);
	}
	public moduleItems(): ModuleItemsContext | undefined {
		return this.tryGetRuleContext(0, ModuleItemsContext);
	}
	public importDefault(): ImportDefaultContext | undefined {
		return this.tryGetRuleContext(0, ImportDefaultContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importFromBlock; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportFromBlock) {
			listener.enterImportFromBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportFromBlock) {
			listener.exitImportFromBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportFromBlock) {
			return visitor.visitImportFromBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleItemsContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public aliasName(): AliasNameContext[];
	public aliasName(i: number): AliasNameContext;
	public aliasName(i?: number): AliasNameContext | AliasNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AliasNameContext);
		} else {
			return this.getRuleContext(i, AliasNameContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_moduleItems; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterModuleItems) {
			listener.enterModuleItems(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitModuleItems) {
			listener.exitModuleItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitModuleItems) {
			return visitor.visitModuleItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDefaultContext extends ParserRuleContext {
	public aliasName(): AliasNameContext {
		return this.getRuleContext(0, AliasNameContext);
	}
	public Comma(): TerminalNode { return this.getToken(JavaScriptParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importDefault; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportDefault) {
			listener.enterImportDefault(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportDefault) {
			listener.exitImportDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportDefault) {
			return visitor.visitImportDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportNamespaceContext extends ParserRuleContext {
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public identifierName(): IdentifierNameContext[];
	public identifierName(i: number): IdentifierNameContext;
	public identifierName(i?: number): IdentifierNameContext | IdentifierNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierNameContext);
		} else {
			return this.getRuleContext(i, IdentifierNameContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importNamespace; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportNamespace) {
			listener.enterImportNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportNamespace) {
			listener.exitImportNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportNamespace) {
			return visitor.visitImportNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportFromContext extends ParserRuleContext {
	public From(): TerminalNode { return this.getToken(JavaScriptParser.From, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(JavaScriptParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importFrom; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportFrom) {
			listener.enterImportFrom(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportFrom) {
			listener.exitImportFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportFrom) {
			return visitor.visitImportFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext[];
	public identifierName(i: number): IdentifierNameContext;
	public identifierName(i?: number): IdentifierNameContext | IdentifierNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierNameContext);
		} else {
			return this.getRuleContext(i, IdentifierNameContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_aliasName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAliasName) {
			listener.enterAliasName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAliasName) {
			listener.exitAliasName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAliasName) {
			return visitor.visitAliasName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_exportStatement; }
	public copyFrom(ctx: ExportStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExportDeclarationContext extends ExportStatementContext {
	public Export(): TerminalNode { return this.getToken(JavaScriptParser.Export, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public exportFromBlock(): ExportFromBlockContext | undefined {
		return this.tryGetRuleContext(0, ExportFromBlockContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(ctx: ExportStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExportDeclaration) {
			listener.enterExportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExportDeclaration) {
			listener.exitExportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportDeclaration) {
			return visitor.visitExportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExportDefaultDeclarationContext extends ExportStatementContext {
	public Export(): TerminalNode { return this.getToken(JavaScriptParser.Export, 0); }
	public Default(): TerminalNode { return this.getToken(JavaScriptParser.Default, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(ctx: ExportStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExportDefaultDeclaration) {
			listener.enterExportDefaultDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExportDefaultDeclaration) {
			listener.exitExportDefaultDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportDefaultDeclaration) {
			return visitor.visitExportDefaultDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportFromBlockContext extends ParserRuleContext {
	public importNamespace(): ImportNamespaceContext | undefined {
		return this.tryGetRuleContext(0, ImportNamespaceContext);
	}
	public importFrom(): ImportFromContext | undefined {
		return this.tryGetRuleContext(0, ImportFromContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public moduleItems(): ModuleItemsContext | undefined {
		return this.tryGetRuleContext(0, ModuleItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_exportFromBlock; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExportFromBlock) {
			listener.enterExportFromBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExportFromBlock) {
			listener.exitExportFromBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportFromBlock) {
			return visitor.visitExportFromBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_declaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getRuleContext(0, VariableDeclarationListContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_variableStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableStatement) {
			listener.enterVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableStatement) {
			listener.exitVariableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableStatement) {
			return visitor.visitVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public assignable(): AssignableContext {
		return this.getRuleContext(0, AssignableContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SemiColon(): TerminalNode { return this.getToken(JavaScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(JavaScriptParser.If, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Else, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_iterationStatement; }
	public copyFrom(ctx: IterationStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DoStatementContext extends IterationStatementContext {
	public Do(): TerminalNode { return this.getToken(JavaScriptParser.Do, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public While(): TerminalNode { return this.getToken(JavaScriptParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStatementContext extends IterationStatementContext {
	public While(): TerminalNode { return this.getToken(JavaScriptParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.SemiColon);
		} else {
			return this.getToken(JavaScriptParser.SemiColon, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForInStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public In(): TerminalNode { return this.getToken(JavaScriptParser.In, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForInStatement) {
			listener.enterForInStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForInStatement) {
			listener.exitForInStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForInStatement) {
			return visitor.visitForInStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForOfStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public Await(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Await, 0); }
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForOfStatement) {
			listener.enterForOfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForOfStatement) {
			listener.exitForOfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForOfStatement) {
			return visitor.visitForOfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarModifierContext extends ParserRuleContext {
	public Var(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Var, 0); }
	public let_(): Let_Context | undefined {
		return this.tryGetRuleContext(0, Let_Context);
	}
	public Const(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Const, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_varModifier; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVarModifier) {
			listener.enterVarModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVarModifier) {
			listener.exitVarModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVarModifier) {
			return visitor.visitVarModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(JavaScriptParser.Continue, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(JavaScriptParser.Break, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Return(): TerminalNode { return this.getToken(JavaScriptParser.Return, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	public Yield(): TerminalNode { return this.getToken(JavaScriptParser.Yield, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_yieldStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithStatementContext extends ParserRuleContext {
	public With(): TerminalNode { return this.getToken(JavaScriptParser.With, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_withStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterWithStatement) {
			listener.enterWithStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitWithStatement) {
			listener.exitWithStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitWithStatement) {
			return visitor.visitWithStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public Switch(): TerminalNode { return this.getToken(JavaScriptParser.Switch, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public caseBlock(): CaseBlockContext {
		return this.getRuleContext(0, CaseBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseBlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public caseClauses(): CaseClausesContext[];
	public caseClauses(i: number): CaseClausesContext;
	public caseClauses(i?: number): CaseClausesContext | CaseClausesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClausesContext);
		} else {
			return this.getRuleContext(i, CaseClausesContext);
		}
	}
	public defaultClause(): DefaultClauseContext | undefined {
		return this.tryGetRuleContext(0, DefaultClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_caseBlock; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseBlock) {
			listener.enterCaseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseBlock) {
			listener.exitCaseBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseBlock) {
			return visitor.visitCaseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClausesContext extends ParserRuleContext {
	public caseClause(): CaseClauseContext[];
	public caseClause(i: number): CaseClauseContext;
	public caseClause(i?: number): CaseClauseContext | CaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClauseContext);
		} else {
			return this.getRuleContext(i, CaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_caseClauses; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseClauses) {
			listener.enterCaseClauses(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseClauses) {
			listener.exitCaseClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseClauses) {
			return visitor.visitCaseClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClauseContext extends ParserRuleContext {
	public Case(): TerminalNode { return this.getToken(JavaScriptParser.Case, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_caseClause; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseClause) {
			listener.enterCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseClause) {
			listener.exitCaseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseClause) {
			return visitor.visitCaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	public Default(): TerminalNode { return this.getToken(JavaScriptParser.Default, 0); }
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_defaultClause; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDefaultClause) {
			listener.enterDefaultClause(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDefaultClause) {
			listener.exitDefaultClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDefaultClause) {
			return visitor.visitDefaultClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelledStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_labelledStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLabelledStatement) {
			listener.enterLabelledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLabelledStatement) {
			listener.exitLabelledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLabelledStatement) {
			return visitor.visitLabelledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(JavaScriptParser.Throw, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(JavaScriptParser.Try, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catchProduction(): CatchProductionContext | undefined {
		return this.tryGetRuleContext(0, CatchProductionContext);
	}
	public finallyProduction(): FinallyProductionContext | undefined {
		return this.tryGetRuleContext(0, FinallyProductionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchProductionContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(JavaScriptParser.Catch, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseParen, 0); }
	public assignable(): AssignableContext | undefined {
		return this.tryGetRuleContext(0, AssignableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_catchProduction; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCatchProduction) {
			listener.enterCatchProduction(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCatchProduction) {
			listener.exitCatchProduction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCatchProduction) {
			return visitor.visitCatchProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyProductionContext extends ParserRuleContext {
	public Finally(): TerminalNode { return this.getToken(JavaScriptParser.Finally, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_finallyProduction; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFinallyProduction) {
			listener.enterFinallyProduction(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFinallyProduction) {
			listener.exitFinallyProduction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFinallyProduction) {
			return visitor.visitFinallyProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DebuggerStatementContext extends ParserRuleContext {
	public Debugger(): TerminalNode { return this.getToken(JavaScriptParser.Debugger, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_debuggerStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDebuggerStatement) {
			listener.enterDebuggerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDebuggerStatement) {
			listener.exitDebuggerStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDebuggerStatement) {
			return visitor.visitDebuggerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public Function_(): TerminalNode { return this.getToken(JavaScriptParser.Function_, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public Class(): TerminalNode { return this.getToken(JavaScriptParser.Class, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classTail(): ClassTailContext {
		return this.getRuleContext(0, ClassTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTailContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Extends, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public classElement(): ClassElementContext[];
	public classElement(i: number): ClassElementContext;
	public classElement(i?: number): ClassElementContext | ClassElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassElementContext);
		} else {
			return this.getRuleContext(i, ClassElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_classTail; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassTail) {
			listener.enterClassTail(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassTail) {
			listener.exitClassTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassTail) {
			return visitor.visitClassTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassElementContext extends ParserRuleContext {
	public methodDefinition(): MethodDefinitionContext | undefined {
		return this.tryGetRuleContext(0, MethodDefinitionContext);
	}
	public assignable(): AssignableContext | undefined {
		return this.tryGetRuleContext(0, AssignableContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Assign, 0); }
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.SemiColon, 0); }
	public Static(): TerminalNode[];
	public Static(i: number): TerminalNode;
	public Static(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Static);
		} else {
			return this.getToken(JavaScriptParser.Static, i);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public Async(): TerminalNode[];
	public Async(i: number): TerminalNode;
	public Async(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Async);
		} else {
			return this.getToken(JavaScriptParser.Async, i);
		}
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public propertyName(): PropertyNameContext | undefined {
		return this.tryGetRuleContext(0, PropertyNameContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public Hashtag(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Hashtag, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_classElement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassElement) {
			listener.enterClassElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassElement) {
			listener.exitClassElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassElement) {
			return visitor.visitClassElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDefinitionContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext | undefined {
		return this.tryGetRuleContext(0, PropertyNameContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public Hashtag(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Hashtag, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public getter(): GetterContext | undefined {
		return this.tryGetRuleContext(0, GetterContext);
	}
	public setter(): SetterContext | undefined {
		return this.tryGetRuleContext(0, SetterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_methodDefinition; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMethodDefinition) {
			listener.enterMethodDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMethodDefinition) {
			listener.exitMethodDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMethodDefinition) {
			return visitor.visitMethodDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameterArg(): FormalParameterArgContext[];
	public formalParameterArg(i: number): FormalParameterArgContext;
	public formalParameterArg(i?: number): FormalParameterArgContext | FormalParameterArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterArgContext);
		} else {
			return this.getRuleContext(i, FormalParameterArgContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	public lastFormalParameterArg(): LastFormalParameterArgContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterArgContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterArgContext extends ParserRuleContext {
	public assignable(): AssignableContext {
		return this.getRuleContext(0, AssignableContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_formalParameterArg; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFormalParameterArg) {
			listener.enterFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFormalParameterArg) {
			listener.exitFormalParameterArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterArg) {
			return visitor.visitFormalParameterArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterArgContext extends ParserRuleContext {
	public Ellipsis(): TerminalNode { return this.getToken(JavaScriptParser.Ellipsis, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_lastFormalParameterArg; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLastFormalParameterArg) {
			listener.enterLastFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLastFormalParameterArg) {
			listener.exitLastFormalParameterArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLastFormalParameterArg) {
			return visitor.visitLastFormalParameterArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementsContext extends ParserRuleContext {
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_sourceElements; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSourceElements) {
			listener.enterSourceElements(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSourceElements) {
			listener.exitSourceElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceElements) {
			return visitor.visitSourceElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenBracket, 0); }
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrayLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	public arrayElement(): ArrayElementContext[];
	public arrayElement(i: number): ArrayElementContext;
	public arrayElement(i?: number): ArrayElementContext | ArrayElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayElementContext);
		} else {
			return this.getRuleContext(i, ArrayElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_elementList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitElementList) {
			return visitor.visitElementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayElementContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrayElement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrayElement) {
			listener.enterArrayElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrayElement) {
			listener.exitArrayElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayElement) {
			return visitor.visitArrayElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_propertyAssignment; }
	public copyFrom(ctx: PropertyAssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyExpressionAssignment) {
			listener.enterPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyExpressionAssignment) {
			listener.exitPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyExpressionAssignment) {
			return visitor.visitPropertyExpressionAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComputedPropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public OpenBracket(): TerminalNode { return this.getToken(JavaScriptParser.OpenBracket, 0); }
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(JavaScriptParser.CloseBracket, 0); }
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterComputedPropertyExpressionAssignment) {
			listener.enterComputedPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitComputedPropertyExpressionAssignment) {
			listener.exitComputedPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitComputedPropertyExpressionAssignment) {
			return visitor.visitComputedPropertyExpressionAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionPropertyContext extends PropertyAssignmentContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionProperty) {
			listener.enterFunctionProperty(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionProperty) {
			listener.exitFunctionProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionProperty) {
			return visitor.visitFunctionProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyGetterContext extends PropertyAssignmentContext {
	public getter(): GetterContext {
		return this.getRuleContext(0, GetterContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyGetter) {
			listener.enterPropertyGetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyGetter) {
			listener.exitPropertyGetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyGetter) {
			return visitor.visitPropertyGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertySetterContext extends PropertyAssignmentContext {
	public setter(): SetterContext {
		return this.getRuleContext(0, SetterContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public formalParameterArg(): FormalParameterArgContext {
		return this.getRuleContext(0, FormalParameterArgContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertySetter) {
			listener.enterPropertySetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertySetter) {
			listener.exitPropertySetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertySetter) {
			return visitor.visitPropertySetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyShorthandContext extends PropertyAssignmentContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyShorthand) {
			listener.enterPropertyShorthand(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyShorthand) {
			listener.exitPropertyShorthand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyShorthand) {
			return visitor.visitPropertyShorthand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenBracket, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_propertyName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyName) {
			listener.enterPropertyName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyName) {
			listener.exitPropertyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyName) {
			return visitor.visitPropertyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arguments; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_argument; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_expressionSequence; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_singleExpression; }
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionExpressionContext extends SingleExpressionContext {
	public anonymousFunction(): AnonymousFunctionContext {
		return this.getRuleContext(0, AnonymousFunctionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClassExpressionContext extends SingleExpressionContext {
	public Class(): TerminalNode { return this.getToken(JavaScriptParser.Class, 0); }
	public classTail(): ClassTailContext {
		return this.getRuleContext(0, ClassTailContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassExpression) {
			listener.enterClassExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassExpression) {
			listener.exitClassExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassExpression) {
			return visitor.visitClassExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(JavaScriptParser.OpenBracket, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(JavaScriptParser.CloseBracket, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMemberIndexExpression) {
			listener.enterMemberIndexExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMemberIndexExpression) {
			listener.exitMemberIndexExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberIndexExpression) {
			return visitor.visitMemberIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberDotExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(JavaScriptParser.Dot, 0); }
	public identifierName(): IdentifierNameContext {
		return this.getRuleContext(0, IdentifierNameContext);
	}
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.QuestionMark, 0); }
	public Hashtag(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Hashtag, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMemberDotExpression) {
			listener.enterMemberDotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMemberDotExpression) {
			listener.exitMemberDotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberDotExpression) {
			return visitor.visitMemberDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewExpressionContext extends SingleExpressionContext {
	public New(): TerminalNode { return this.getToken(JavaScriptParser.New, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArgumentsExpression) {
			listener.enterArgumentsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArgumentsExpression) {
			listener.exitArgumentsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArgumentsExpression) {
			return visitor.visitArgumentsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MetaExpressionContext extends SingleExpressionContext {
	public New(): TerminalNode { return this.getToken(JavaScriptParser.New, 0); }
	public Dot(): TerminalNode { return this.getToken(JavaScriptParser.Dot, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMetaExpression) {
			listener.enterMetaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMetaExpression) {
			listener.exitMetaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMetaExpression) {
			return visitor.visitMetaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public PlusPlus(): TerminalNode { return this.getToken(JavaScriptParser.PlusPlus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public MinusMinus(): TerminalNode { return this.getToken(JavaScriptParser.MinusMinus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPostDecreaseExpression) {
			listener.enterPostDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPostDecreaseExpression) {
			listener.exitPostDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPostDecreaseExpression) {
			return visitor.visitPostDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteExpressionContext extends SingleExpressionContext {
	public Delete(): TerminalNode { return this.getToken(JavaScriptParser.Delete, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDeleteExpression) {
			listener.enterDeleteExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDeleteExpression) {
			listener.exitDeleteExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDeleteExpression) {
			return visitor.visitDeleteExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VoidExpressionContext extends SingleExpressionContext {
	public Void(): TerminalNode { return this.getToken(JavaScriptParser.Void, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVoidExpression) {
			listener.enterVoidExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVoidExpression) {
			listener.exitVoidExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVoidExpression) {
			return visitor.visitVoidExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeofExpressionContext extends SingleExpressionContext {
	public Typeof(): TerminalNode { return this.getToken(JavaScriptParser.Typeof, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTypeofExpression) {
			listener.enterTypeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTypeofExpression) {
			listener.exitTypeofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeofExpression) {
			return visitor.visitTypeofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	public PlusPlus(): TerminalNode { return this.getToken(JavaScriptParser.PlusPlus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	public MinusMinus(): TerminalNode { return this.getToken(JavaScriptParser.MinusMinus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPreDecreaseExpression) {
			listener.enterPreDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPreDecreaseExpression) {
			listener.exitPreDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPreDecreaseExpression) {
			return visitor.visitPreDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	public Plus(): TerminalNode { return this.getToken(JavaScriptParser.Plus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterUnaryPlusExpression) {
			listener.enterUnaryPlusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitUnaryPlusExpression) {
			listener.exitUnaryPlusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryPlusExpression) {
			return visitor.visitUnaryPlusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public Minus(): TerminalNode { return this.getToken(JavaScriptParser.Minus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(JavaScriptParser.BitNot, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitNotExpression) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public Not(): TerminalNode { return this.getToken(JavaScriptParser.Not, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AwaitExpressionContext extends SingleExpressionContext {
	public Await(): TerminalNode { return this.getToken(JavaScriptParser.Await, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAwaitExpression) {
			listener.enterAwaitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAwaitExpression) {
			listener.exitAwaitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAwaitExpression) {
			return visitor.visitAwaitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Power(): TerminalNode { return this.getToken(JavaScriptParser.Power, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPowerExpression) {
			listener.enterPowerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPowerExpression) {
			listener.exitPowerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Modulus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Minus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CoalesceExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public NullCoalesce(): TerminalNode { return this.getToken(JavaScriptParser.NullCoalesce, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCoalesceExpression) {
			listener.enterCoalesceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCoalesceExpression) {
			listener.exitCoalesceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCoalesceExpression) {
			return visitor.visitCoalesceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitShiftExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftArithmetic, 0); }
	public RightShiftLogical(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftLogical, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitShiftExpression) {
			listener.enterBitShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitShiftExpression) {
			listener.exitBitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitShiftExpression) {
			return visitor.visitBitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.GreaterThanEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceofExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Instanceof(): TerminalNode { return this.getToken(JavaScriptParser.Instanceof, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterInstanceofExpression) {
			listener.enterInstanceofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitInstanceofExpression) {
			listener.exitInstanceofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitInstanceofExpression) {
			return visitor.visitInstanceofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public In(): TerminalNode { return this.getToken(JavaScriptParser.In, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterInExpression) {
			listener.enterInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitInExpression) {
			listener.exitInExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitInExpression) {
			return visitor.visitInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Equals_(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Equals_, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NotEquals, 0); }
	public IdentityEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.IdentityEquals, 0); }
	public IdentityNotEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.IdentityNotEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitAnd(): TerminalNode { return this.getToken(JavaScriptParser.BitAnd, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitXOr(): TerminalNode { return this.getToken(JavaScriptParser.BitXOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitXOrExpression) {
			listener.enterBitXOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitXOrExpression) {
			listener.exitBitXOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitXOrExpression) {
			return visitor.visitBitXOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitOr(): TerminalNode { return this.getToken(JavaScriptParser.BitOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(JavaScriptParser.And, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(JavaScriptParser.Or, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public QuestionMark(): TerminalNode { return this.getToken(JavaScriptParser.QuestionMark, 0); }
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Assign(): TerminalNode { return this.getToken(JavaScriptParser.Assign, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentOperatorExpression) {
			listener.enterAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentOperatorExpression) {
			listener.exitAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperatorExpression) {
			return visitor.visitAssignmentOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImportExpressionContext extends SingleExpressionContext {
	public Import(): TerminalNode { return this.getToken(JavaScriptParser.Import, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportExpression) {
			listener.enterImportExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportExpression) {
			listener.exitImportExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportExpression) {
			return visitor.visitImportExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TemplateStringExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public templateStringLiteral(): TemplateStringLiteralContext {
		return this.getRuleContext(0, TemplateStringLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTemplateStringExpression) {
			listener.enterTemplateStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTemplateStringExpression) {
			listener.exitTemplateStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTemplateStringExpression) {
			return visitor.visitTemplateStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class YieldExpressionContext extends SingleExpressionContext {
	public yieldStatement(): YieldStatementContext {
		return this.getRuleContext(0, YieldStatementContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterYieldExpression) {
			listener.enterYieldExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitYieldExpression) {
			listener.exitYieldExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitYieldExpression) {
			return visitor.visitYieldExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisExpressionContext extends SingleExpressionContext {
	public This(): TerminalNode { return this.getToken(JavaScriptParser.This, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterThisExpression) {
			listener.enterThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitThisExpression) {
			listener.exitThisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitThisExpression) {
			return visitor.visitThisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperExpressionContext extends SingleExpressionContext {
	public Super(): TerminalNode { return this.getToken(JavaScriptParser.Super, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSuperExpression) {
			listener.enterSuperExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSuperExpression) {
			listener.exitSuperExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSuperExpression) {
			return visitor.visitSuperExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
	public arrayLiteral(): ArrayLiteralContext {
		return this.getRuleContext(0, ArrayLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrayLiteralExpression) {
			listener.enterArrayLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrayLiteralExpression) {
			listener.exitArrayLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteralExpression) {
			return visitor.visitArrayLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectLiteralExpressionContext extends SingleExpressionContext {
	public objectLiteral(): ObjectLiteralContext {
		return this.getRuleContext(0, ObjectLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterObjectLiteralExpression) {
			listener.enterObjectLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitObjectLiteralExpression) {
			listener.exitObjectLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteralExpression) {
			return visitor.visitObjectLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_assignable; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignable) {
			listener.enterAssignable(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignable) {
			listener.exitAssignable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignable) {
			return visitor.visitAssignable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public propertyAssignment(): PropertyAssignmentContext[];
	public propertyAssignment(i: number): PropertyAssignmentContext;
	public propertyAssignment(i?: number): PropertyAssignmentContext | PropertyAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyAssignmentContext);
		} else {
			return this.getRuleContext(i, PropertyAssignmentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_objectLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterObjectLiteral) {
			listener.enterObjectLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitObjectLiteral) {
			listener.exitObjectLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteral) {
			return visitor.visitObjectLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnonymousFunctionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_anonymousFunction; }
	public copyFrom(ctx: AnonymousFunctionContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionDeclContext extends AnonymousFunctionContext {
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getRuleContext(0, FunctionDeclarationContext);
	}
	constructor(ctx: AnonymousFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnonymousFunctionDeclContext extends AnonymousFunctionContext {
	public Function_(): TerminalNode { return this.getToken(JavaScriptParser.Function_, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(ctx: AnonymousFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAnonymousFunctionDecl) {
			listener.enterAnonymousFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAnonymousFunctionDecl) {
			listener.exitAnonymousFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAnonymousFunctionDecl) {
			return visitor.visitAnonymousFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrowFunctionContext extends AnonymousFunctionContext {
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		return this.getRuleContext(0, ArrowFunctionParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(JavaScriptParser.ARROW, 0); }
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		return this.getRuleContext(0, ArrowFunctionBodyContext);
	}
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	constructor(ctx: AnonymousFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunction) {
			listener.enterArrowFunction(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunction) {
			listener.exitArrowFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunction) {
			return visitor.visitArrowFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionParametersContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseParen, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrowFunctionParameters; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunctionParameters) {
			listener.enterArrowFunctionParameters(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunctionParameters) {
			listener.exitArrowFunctionParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionParameters) {
			return visitor.visitArrowFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionBodyContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrowFunctionBody; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunctionBody) {
			listener.enterArrowFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunctionBody) {
			listener.exitArrowFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionBody) {
			return visitor.visitArrowFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public MultiplyAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.MultiplyAssign, 0); }
	public DivideAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.DivideAssign, 0); }
	public ModulusAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.ModulusAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.MinusAssign, 0); }
	public LeftShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LeftShiftArithmeticAssign, 0); }
	public RightShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftArithmeticAssign, 0); }
	public RightShiftLogicalAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftLogicalAssign, 0); }
	public BitAndAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BitAndAssign, 0); }
	public BitXorAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BitXorAssign, 0); }
	public BitOrAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BitOrAssign, 0); }
	public PowerAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.PowerAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	public templateStringLiteral(): TemplateStringLiteralContext | undefined {
		return this.tryGetRuleContext(0, TemplateStringLiteralContext);
	}
	public RegularExpressionLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RegularExpressionLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public bigintLiteral(): BigintLiteralContext | undefined {
		return this.tryGetRuleContext(0, BigintLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_literal; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateStringLiteralContext extends ParserRuleContext {
	public BackTick(): TerminalNode[];
	public BackTick(i: number): TerminalNode;
	public BackTick(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.BackTick);
		} else {
			return this.getToken(JavaScriptParser.BackTick, i);
		}
	}
	public templateStringAtom(): TemplateStringAtomContext[];
	public templateStringAtom(i: number): TemplateStringAtomContext;
	public templateStringAtom(i?: number): TemplateStringAtomContext | TemplateStringAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateStringAtomContext);
		} else {
			return this.getRuleContext(i, TemplateStringAtomContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_templateStringLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTemplateStringLiteral) {
			listener.enterTemplateStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTemplateStringLiteral) {
			listener.exitTemplateStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTemplateStringLiteral) {
			return visitor.visitTemplateStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateStringAtomContext extends ParserRuleContext {
	public TemplateStringAtom(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.TemplateStringAtom, 0); }
	public TemplateStringStartExpression(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.TemplateStringStartExpression, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public TemplateCloseBrace(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.TemplateCloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_templateStringAtom; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTemplateStringAtom) {
			listener.enterTemplateStringAtom(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTemplateStringAtom) {
			listener.exitTemplateStringAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTemplateStringAtom) {
			return visitor.visitTemplateStringAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.DecimalLiteral, 0); }
	public HexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.HexIntegerLiteral, 0); }
	public OctalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OctalIntegerLiteral, 0); }
	public OctalIntegerLiteral2(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OctalIntegerLiteral2, 0); }
	public BinaryIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BinaryIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BigintLiteralContext extends ParserRuleContext {
	public BigDecimalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigDecimalIntegerLiteral, 0); }
	public BigHexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigHexIntegerLiteral, 0); }
	public BigOctalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigOctalIntegerLiteral, 0); }
	public BigBinaryIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigBinaryIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_bigintLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBigintLiteral) {
			listener.enterBigintLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBigintLiteral) {
			listener.exitBigintLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBigintLiteral) {
			return visitor.visitBigintLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_getter; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterGetter) {
			listener.enterGetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitGetter) {
			listener.exitGetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitGetter) {
			return visitor.visitGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_setter; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSetter) {
			listener.enterSetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSetter) {
			listener.exitSetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSetter) {
			return visitor.visitSetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public reservedWord(): ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_identifierName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIdentifierName) {
			listener.enterIdentifierName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIdentifierName) {
			listener.exitIdentifierName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifierName) {
			return visitor.visitIdentifierName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	public NonStrictLet(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NonStrictLet, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_identifier; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public Break(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Break, 0); }
	public Do(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Do, 0); }
	public Instanceof(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Instanceof, 0); }
	public Typeof(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Typeof, 0); }
	public Case(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Case, 0); }
	public Else(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Else, 0); }
	public New(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.New, 0); }
	public Var(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Var, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Catch, 0); }
	public Finally(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Finally, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Return, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Void, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Continue, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.For, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Switch, 0); }
	public While(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.While, 0); }
	public Debugger(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Debugger, 0); }
	public Function_(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Function_, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.This, 0); }
	public With(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.With, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Default, 0); }
	public If(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.If, 0); }
	public Throw(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Throw, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Delete, 0); }
	public In(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.In, 0); }
	public Try(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Try, 0); }
	public Class(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Class, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Enum, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Extends, 0); }
	public Super(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Super, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Const, 0); }
	public Export(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Export, 0); }
	public Import(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Import, 0); }
	public Implements(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Implements, 0); }
	public let_(): Let_Context | undefined {
		return this.tryGetRuleContext(0, Let_Context);
	}
	public Private(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Private, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Public, 0); }
	public Interface(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Interface, 0); }
	public Package(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Package, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Protected, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Static, 0); }
	public Yield(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Yield, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Await(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Await, 0); }
	public From(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.From, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_keyword; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Let_Context extends ParserRuleContext {
	public NonStrictLet(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NonStrictLet, 0); }
	public StrictLet(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StrictLet, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_let_; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLet_) {
			listener.enterLet_(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLet_) {
			listener.exitLet_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLet_) {
			return visitor.visitLet_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.SemiColon, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_eos; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


