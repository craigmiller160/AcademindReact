import React, { SFC } from 'react';
import classes from './Board.css';
import { IBoardProps } from './IBoardProps';
import Row from "./Row/Row";

const Board: SFC<IBoardProps> = props => {
    return (
        <div className={classes.Board}>
            <Row
                top={true}
                bottom={false}
                spaces={props.spaces.top}
                squareClick={props.squareClick} />
            <Row
                top={false}
                bottom={false}
                spaces={props.spaces.middle}
                squareClick={props.squareClick} />
            <Row
                top={false}
                bottom={true}
                spaces={props.spaces.bottom}
                squareClick={props.squareClick} />
        </div>
    )
};

export default Board;