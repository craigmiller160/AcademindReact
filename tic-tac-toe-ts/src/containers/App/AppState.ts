import { TicTacToe } from "../../data/TicTacToe";


export interface AppState {
    spaces: TicTacToe,
    winner: string
}