import { MouseEvent } from 'react';

export interface ISquareProps {
    top: boolean;
    bottom: boolean;
    right: boolean;
    left: boolean;
    value: string;
    squareClick: (event: MouseEvent) => void;
}