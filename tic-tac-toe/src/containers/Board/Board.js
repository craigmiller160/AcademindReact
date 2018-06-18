import React, { Component } from 'react';
import classes from './Board.css';
import Square from '../../components/Square/Square';

class Board extends Component {

    render() {
        return (
            <div className={classes.Board}>
                <div>
                    <Square top={true} left={true} />
                    <Square top={true} />
                    <Square top={true} right={true} />
                </div>
                <div>
                    <Square left={true} />
                    <Square />
                    <Square right={true} />
                </div>
                <div>
                    <Square bottom={true} left={true} />
                    <Square bottom={true} />
                    <Square bottom={true} right={true} />
                </div>
            </div>
        );
    }

}

export default Board;