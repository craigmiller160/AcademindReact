import React, { SFC } from 'react';
import classes from './Buttons.css';
import IButtonsProps from './IButtonsProps';
import NumberPad from './NumberPad/NumberPad';
import Operations from './Operations/Operations';
import Button from './Button/Button';

const Buttons: SFC<IButtonsProps> = props => {
    return (
        <div className={classes.Buttons}>
            <div className={classes.row}>
                <NumberPad action={props.action} />
                <Operations action={props.action} />
            </div>
            <div className={classes.row}>
                <Button type="Clear" action={() => props.action('Clear')}/>
            </div>
        </div>
    );
};

export default Buttons;