import React, { SFC } from 'react';
import { getSquareName } from '../../../../data/squareNames';
import { ISquareProps } from "./ISquareProps";
import classes from './Square.css';

const Square: SFC<ISquareProps> = props => {
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
        <div data-value={squareName} className={classList.join(' ')} onClick={props.squareClick}>
            <p>{props.value}</p>
        </div>
    );
};

Square.defaultProps = {
    bottom: false,
    left: false,
    right: false,
    top: false,
    value: ''
};

export default Square;