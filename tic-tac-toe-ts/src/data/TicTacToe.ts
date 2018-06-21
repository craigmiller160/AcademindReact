

export class TicTacToeRow {
    constructor(public left?: string,
                public middle?: string,
                public right?: string) { }
}

export class TicTacToe {
    constructor(public top?: TicTacToeRow,
                public middle?: TicTacToeRow,
                public right?: TicTacToeRow) { }
}