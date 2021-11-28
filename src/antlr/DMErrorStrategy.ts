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

    foundInvalidText(): Boolean {
        return this.invalidInput;
    }
}