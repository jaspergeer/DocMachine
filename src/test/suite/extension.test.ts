import { CharStreams } from 'antlr4ts';
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { CFunctionParser } from '../../lang/C/CFunctionParser';

suite('C Test Suite', () => {
	vscode.window.showInformationMessage('Start C Tests.');

	test('No parameters test', () => {
        let input: string = "void func();";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 0);
	});

    test('One parameter test', () => {
        let input: string = "int func(int i);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 1);
        assert(parser.getParamNames()[0] === "i");
	});

    test('Two parameter test', () => {
        let input: string = "int func(int i, char b);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 2);
        assert(parser.getParamNames()[0] === "i");
        assert(parser.getParamNames()[1] === "b");
	});
    
    test('Array single parameter test', () => {
        let input: string = "int func(int i[]);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 1);
        assert(parser.getParamNames()[0] === "i");
	});

    test('Array multiple parameter test', () => {
        let input: string = "int func(int i[][], char j[]);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 2);
        assert(parser.getParamNames()[0] === "i");
        assert(parser.getParamNames()[1] === "j");
	});

    test('Pointer single parameter test', () => {
        let input: string = "int func(int *i);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 1);
        assert(parser.getParamNames()[0] === "i");
	});

    test('Pointer multiple parameter test', () => {
        let input: string = "int func(int *i, char **j, long *k);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 3);
        assert(parser.getParamNames()[0] === "i");
        assert(parser.getParamNames()[1] === "j");
        assert(parser.getParamNames()[2] === "k");
	});

    test('Pointer return type test', () => {
        let input: string = "int *func(int *i, char **j, long *k);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int*");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 3);
        assert(parser.getParamNames()[0] === "i");
        assert(parser.getParamNames()[1] === "j");
        assert(parser.getParamNames()[2] === "k");
	});

    test('Double pointer return type test', () => {
        let input: string = "int **func(int *i, char **j, long *k);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int**");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 3);
        assert(parser.getParamNames()[0] === "i");
        assert(parser.getParamNames()[1] === "j");
        assert(parser.getParamNames()[2] === "k");
	});

    test('Function pointer single parameter test', () => {
        let input: string = "void func ( void (*f)(int) );";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 1);
        assert(parser.getParamNames()[0] === "f");
	});

    test('Function pointer multiple parameter test', () => {
        let input: string = "void func ( void (*f)(int), void (*d)(int, char), void (*g)() );";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 3);
        assert(parser.getParamNames()[0] === "f");
        assert(parser.getParamNames()[1] === "d");
        assert(parser.getParamNames()[2] === "g");
	});

    test('More declaration specifiers no parameters test', () => {
        let input: string = "extern void func();";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 0);
	});

    test('More declaration specifiers one parameter test', () => {
        let input: string = "extern inline int func(int i);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 1);
        assert(parser.getParamNames()[0] === "i");
	});

    test('More declaration specifiers two parameter test', () => {
        let input: string = "extern inline int func(int i, char b);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 2);
        assert(parser.getParamNames()[0] === "i");
        assert(parser.getParamNames()[1] === "b");
	});

    test('More declaration specifiers function pointer parameter test', () => {
        let input: string = "extern void func ( void (*f)(int), void (*d)(int, char), void (*g)() );";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 3);
        assert(parser.getParamNames()[0] === "f");
        assert(parser.getParamNames()[1] === "d");
        assert(parser.getParamNames()[2] === "g");
	});

    test('More declaration specifiers single pointer parameter test', () => {
        let input: string = "extern inline int func (int *i);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 1);
        assert(parser.getParamNames()[0] === "i");
	});

    test('More declaration specifiers array parameter test', () => {
        let input: string = "extern inline int func (int i[]);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 1);
        assert(parser.getParamNames()[0] === "i");
	});

    test('More declaration specifiers array pointer parameter test', () => {
        let input: string = "extern inline int func (int *i[]);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "int");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 1);
        assert(parser.getParamNames()[0] === "i");
	});

    test('More declaration specifiers multiple array parameter test', () => {
        let input: string = "extern inline char func (int i[], char j[][]);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "char");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 2);
        assert(parser.getParamNames()[0] === "i");
        assert(parser.getParamNames()[1] === "j");
	});

    test('More declaration specifiers multiple array pointer parameter test', () => {
        let input: string = "extern inline char func (int *i[], char *j[][]);";
        let parser: CFunctionParser = new CFunctionParser(CharStreams.fromString(input));
        assert(parser.getReturnType() === "char");
        assert(parser.getExceptions().length === 0);
        assert(parser.getParamNames().length === 2);
        assert(parser.getParamNames()[0] === "i");
        assert(parser.getParamNames()[1] === "j");
	});
});

suite('TypeScript Test Suite', () => {
});