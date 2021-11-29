
# DocMachine

DocMachine is a Visual Studio Code extension for generating documentation on the fly.

It uses ANTLR-generated parsers to extract parameter names and return types from your code and create formatted function contracts.

The user can customize the format of function contracts and file headers through VSCode settings.

## Supported Languages
* C
* C++ (through the C Parser)

## Getting Started

Step 1) Install the [DocMachine](https://marketplace.visualstudio.com/items?itemName=JasperGeer.docmachine) extension from the VSCode marketplace.

Step 2) Open a document in a supported language. A message should appear in the bottom right of the window stating that a supported language is detected.

Step 3) Place the cursor at the top of the document (to generate a file header) or above a function declaration (to generate a function contract).

Step 4) Type **/dm** and press enter. Sit back and watch DocMachine generate documentation for you!

## Built With
*  [TypeScript](https://www.typescriptlang.org) - Language used to build the extension
*  [VSCode](https://code.visualstudio.com) - Editor and API used to build the extension
*  [ANTLR](https://www.antlr.org) - Parser generator
*  [antlr4ts](https://github.com/tunnelvisionlabs/antlr4ts) - TypeScript target for ANTLR
*  [Nodejs](https://nodejs.org/en/) - JavaScript runtime
*  [npm](https://www.npmjs.com) - Package manager for Nodejs

## Contributors
*  [Jasper Geer](https://github.com/jaspergeer)

## License
MIT (c) Jasper Geer
