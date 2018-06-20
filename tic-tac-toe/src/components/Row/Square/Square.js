import React from 'react';
import classes from './Square.css';
import { getSquareName } from '../../../data/squareNames';

const Square = props => {
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

    //TODO should I bind "this" here? Ask the question somewhere
    return (
        <div className={classList.join(' ')} onClick={() => props.squareClick(squareName)}>
            <p>{props.value}</p>
        </div>
    );
};

export default Square;