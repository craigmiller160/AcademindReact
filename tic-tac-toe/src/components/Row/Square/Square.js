import React from 'react';
import classes from './Square.css';

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

    return (
        <div className={classList.join(' ')} />
    );
};

export default Square;