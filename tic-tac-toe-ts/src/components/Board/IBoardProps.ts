import * as React from 'react';
import { TicTacToe } from '../../data/TicTacToe/TicTacToe';

export interface IBoardProps {
    spaces: TicTacToe,
    squareClick: (event: React.MouseEvent) => void
}