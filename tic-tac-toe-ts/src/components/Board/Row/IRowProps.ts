import * as React from 'react';
import { TicTacToeRow } from "../../../data/TicTacToe/TicTacToeRow";

export interface IRowProps {
    top: boolean;
    bottom: boolean;
    spaces: TicTacToeRow;
    squareClick: (event: React.MouseEvent) => void;
}