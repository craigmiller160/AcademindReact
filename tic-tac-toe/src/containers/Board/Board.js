import React, { Component } from 'react';
import classes from './Board.css';
import Row from '../../components/Row/Row';
import squareValueMap from '../../data/squareValueMap';

class Board extends Component {

    state = {
        spaces: {
            top: {
                left: '',
                middle: '',
                right: ''
            },
            middle: {
                left: '',
                middle: '',
                right: ''
            },
            bottom: {
                left: '',
                middle: '',
                right: ''
            }
        }
    };

    squareClickedHandler = key => {
        //TODO finish this
    };

    render() {
        return (
            <div className={classes.Board}>
                <Row
                    top={true}
                    spaces={this.state.spaces.top}
                    squareClick={this.squareClickedHandler} />
                <Row
                    spaces={this.state.spaces.middle}
                    squareClick={this.squareClickedHandler} />
                <Row
                    bottom={true}
                    spaces={this.state.spaces.bottom}
                    squareClick={this.squareClickedHandler} />
            </div>
        );
    }

}

export default Board;