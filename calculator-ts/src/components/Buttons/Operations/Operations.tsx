import React, { SFC } from 'react';
import classes from './Operations.css';
import IOperationsProps from './IOperationsProps';
import Button from '../Button/Button';

const Operations: SFC<IOperationsProps> = props => {
    return (
        <div className={classes.Operations}>
            <Button type="/" action={() => props.action('/')}/>
            <Button type="*" action={() => props.action('*')} />
            <Button type="-" action={() => props.action('-')} />
            <Button type="+" action={() => props.action('+')} />
        </div>
    );
};

export default Operations;