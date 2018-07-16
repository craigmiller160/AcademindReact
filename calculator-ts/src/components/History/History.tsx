import React, { SFC } from 'react';
import classes from './History.css';
import IHistoryProps from './IHistoryProps';

const History: SFC<IHistoryProps> = props => {
    return (
        <div className={classes.History}>
            {props.history.map(item => <p>{item}</p>)}
        </div>
    );
};

export default History;