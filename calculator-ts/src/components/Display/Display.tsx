import React, { SFC } from 'react';
import classes from './Display.css';
import IDisplayProps from './IDisplayProps';

const Display: SFC<IDisplayProps> = props => {
    return (
        <div className={classes.Display}>
            {props.value}
        </div>
    );
};

export default Display;