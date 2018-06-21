import { TicTacToeRow } from "./TicTacToeRow";

export class TicTacToe {
    constructor(public top = new TicTacToeRow(),
                public middle =new TicTacToeRow(),
                public bottom = new TicTacToeRow()) { }
}