import React, { SFC } from 'react';
import classes from './Buttons.css';
import Button from './Button/Button';
import IButtonsProps from './IButtonsProps';

const Buttons: SFC<IButtonsProps> = props => {
    return (
        <div className={classes.Buttons}>
            <div className={classes.row}>
                <Button type="7" action={() => props.action('7')}/>
                <Button type="8" action={() => props.action('8')} />
                <Button type="9" action={() => props.action('9')} />
            </div>
            <div className={classes.row}>
                <div>Hello</div>
                <div>Universe</div>
                <div>Stuff</div>
            </div>
        </div>
    );
};

export default Buttons;