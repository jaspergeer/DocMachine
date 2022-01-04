/*!
 * Copyright 2021 Jasper Geer. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */

import { ANTLRErrorListener, ANTLRErrorStrategy, DefaultErrorStrategy, InputMismatchException, NoViableAltException, Parser, RecognitionException, Recognizer, Token } from "antlr4ts";

export class DMErrorStrategy extends DefaultErrorStrategy implements ANTLRErrorStrategy {

    private invalidInput: Boolean;

    constructor() {
        super();
        this.invalidInput = false;
    }

    protected reportNoViableAlternative(recognizer: Parser, e: NoViableAltException): void {
        this.invalidInput = true;
    }

    protected reportInputMismatch(recognizer: Parser, e: InputMismatchException): void {
        this.invalidInput = true;
    }

    protected reportUnwantedToken(recognizer: Parser): void {
        this.invalidInput = true;
    }


    foundInvalidText(): Boolean {
        return this.invalidInput;
    }
}