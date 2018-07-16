import React, { SFC } from 'react';
import classes from './Button.css';
import IButtonProps from './IButtonProps';

const Button: SFC<IButtonProps> = props => {
    return (
        <div
            className={classes.Button}
            onClick={props.action}>
            {props.type}
        </div>
    );
};

export default Button;