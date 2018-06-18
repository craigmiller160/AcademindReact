import React, { Component } from 'react';
import classes from './Board.css';
import Row from '../../components/Row/Row';

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
                middle: 'X', //TODO clear this value
                right: ''
            },
            bottom: {
                left: '',
                middle: '',
                right: ''
            }
        }
    };

    render() {
        return (
            <div className={classes.Board}>
                <Row
                    top={true}
                    spaces={this.state.spaces.top} />
                <Row
                    spaces={this.state.spaces.middle} />
                <Row
                    bottom={true}
                    spaces={this.state.spaces.bottom} />
            </div>
        );
    }

}

export default Board;