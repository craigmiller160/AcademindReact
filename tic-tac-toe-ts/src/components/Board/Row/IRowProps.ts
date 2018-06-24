import { TicTacToeRow } from "../../../data/TicTacToe/TicTacToeRow";

export interface IRowProps {
    top: boolean;
    bottom: boolean;
    spaces: TicTacToeRow;
    squareClick: (squareName: string) => void;
}