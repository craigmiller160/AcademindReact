import React, { Component } from 'react';
import classes from './Board.css';
import Row from '../../components/Row/Row';

class Board extends Component {

    render() {
        return (
            <div className={classes.Board}>
                <Row top={true} />
                <Row />
                <Row bottom={true} />
            </div>
        );
    }

}

export default Board;