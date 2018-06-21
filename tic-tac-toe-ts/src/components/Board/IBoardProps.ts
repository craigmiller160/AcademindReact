import { TicTacToe } from '../../data/TicTacToe/TicTacToe';

export interface IBoardProps {
    spaces: TicTacToe,
    squareClick: (key: string) => void
}