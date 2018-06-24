import * as React from 'react';
import { IWinnerProps } from "./IWinnerProps";
import * as classes from './Winner.css';

const Winner: React.SFC<IWinnerProps> = props => {
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