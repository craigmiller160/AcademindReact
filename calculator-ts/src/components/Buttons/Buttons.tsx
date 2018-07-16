import React, { ReactElement, SFC } from 'react';
import classes from './Buttons.css';
import Button from './Button/Button';
import IButtonsProps from './IButtonsProps';
import IButtonProps from './Button/IButtonProps';

const Buttons: SFC<IButtonsProps> = props => {
    const numberButtons: Array<ReactElement<IButtonProps>> = [];
    for (let i = 0; i < 10; i++) {
        numberButtons.push(<Button type={`${i}`} action={() => props.action(`${i}`)}/>)
    }

    return (
        <div className={classes.Buttons}>
            <div className={classes.row}>
                {numberButtons[7]}
                {numberButtons[8]}
                {numberButtons[9]}
            </div>
            <div className={classes.row}>
                {numberButtons[4]}
                {numberButtons[5]}
                {numberButtons[6]}
            </div>
            <div className={classes.row}>
                {numberButtons[1]}
                {numberButtons[2]}
                {numberButtons[3]}
            </div>
            <div className={classes.row}>
                <Button type="." action={() => props.action('.')}/>
                {numberButtons[0]}
                <Button type="=" action={() => props.action('=')} />
            </div>
        </div>
    );
};

export default Buttons;