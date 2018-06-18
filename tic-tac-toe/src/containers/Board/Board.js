import React, { Component } from 'react';
import classes from './Board.css';
import Square from '../../components/Square/Square';

class Board extends Component {

    render() {
        return (
            <div className={classes.Board}>
                <div>
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div>
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div>
                    <Square />
                    <Square />
                    <Square />
                </div>
            </div>
        );
    }

}

export default Board;