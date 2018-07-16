import React, { SFC } from 'react';
import classes from './History.css';
import IHistoryProps from './IHistoryProps';

const History: SFC<IHistoryProps> = props => {
    const history = props.history.reverse();
    return (
        <div className={classes.History}>
            <h3>History</h3>
            <div className={classes.list}>
                {history.map((item, index) => <p key={index}>{item}</p>)}
            </div>
        </div>
    );
};

export default History;