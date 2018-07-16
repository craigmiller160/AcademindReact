import React, { SFC } from 'react';
import classes from './Buttons.css';
import IButtonsProps from './IButtonsProps';
import NumberPad from './NumberPad/NumberPad';

const Buttons: SFC<IButtonsProps> = props => {


    return (
        <div className={classes.Buttons}>
            <NumberPad action={props.action} />
        </div>
    );
};

export default Buttons;