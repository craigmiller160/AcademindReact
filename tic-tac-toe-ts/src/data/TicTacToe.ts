

export class TicTacToeRow {
    constructor(public left = '',
                public middle = '',
                public right = '') { }
}

export class TicTacToe {
    constructor(public top = new TicTacToeRow(),
                public middle =new TicTacToeRow(),
                public bottom = new TicTacToeRow()) { }
}