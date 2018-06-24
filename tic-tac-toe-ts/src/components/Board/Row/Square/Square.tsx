import * as React from 'react';
import { getSquareName } from '../../../../data/squareNames';
import { ISquareProps } from "./ISquareProps";
import * as classes from './Square.css';

const Square: React.SFC<ISquareProps> = props => {
    const classList = [classes.Square];
    if (props.top) {
        classList.push(classes.top);
    }

    if (props.left) {
        classList.push(classes.left);
    }

    if (props.right) {
        classList.push(classes.right);
    }

    if (props.bottom) {
        classList.push(classes.bottom);
    }

    const squareName = getSquareName(props.top, props.bottom, props.left, props.right);

    return (
        <div className={classList.join(' ')} onClick={() => props.squareClick(squareName)}>
            <p>{props.value}</p>
        </div>
    );
};

Square.defaultProps = {
    top: false,
    bottom: false,
    right: false,
    left: false,
    value: ''
};

export default Square;