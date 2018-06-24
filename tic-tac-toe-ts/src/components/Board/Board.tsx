import * as React from 'react';
import * as classes from './Board.css';
import { IBoardProps } from './IBoardProps';

const Board: React.SFC<IBoardProps> = props => {
    return (
        <div className={classes.Board}>
            <p>Board component</p>
        </div>
    )
};

export default Board;