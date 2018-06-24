import { TicTacToe } from "../../data/TicTacToe/TicTacToe";


export interface IAppState {
    spaces: TicTacToe,
    winner: string
}