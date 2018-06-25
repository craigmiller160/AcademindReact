import React, { SFC } from 'react';
import { IWinnerProps } from "./IWinnerProps";
import classes from './Winner.css';

const Winner: SFC<IWinnerProps> = props => {
    return (
        <div>
            <hr />
            <div className={classes.Winner}>
                <p>Winner: {props.winner}</p>
            </div>
        </div>
    );
};

export default Winner;