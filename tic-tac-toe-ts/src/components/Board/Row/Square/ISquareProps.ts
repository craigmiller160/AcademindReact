
export interface ISquareProps {
    top: boolean;
    bottom: boolean;
    right: boolean;
    left: boolean;
    value: string;
    squareClick: (squareName: string) => void;
}