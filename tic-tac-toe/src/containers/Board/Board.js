import React, { Component } from 'react';
import classes from './Board.css';
import Row from '../../components/Row/Row';
import squareValueMap from '../../data/squareValueMap';
import * as squareNames from '../../data/squareNames';

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
        const newSpaces = {...this.state.spaces};
        switch (key) {
            case squareNames.TOP_LEFT:
                newSpaces.top.left = squareValueMap.get(this.state.spaces.top.left);
                break;
            case squareNames.TOP_MIDDLE:
                newSpaces.top.middle = squareValueMap.get(this.state.spaces.top.middle);
                break;
            case squareNames.TOP_RIGHT:
                newSpaces.top.right = squareValueMap.get(this.state.spaces.top.right);
                break;
            case squareNames.MIDDLE_LEFT:
                newSpaces.middle.left = squareValueMap.get(this.state.spaces.middle.left);
                break;
            case squareNames.MIDDLE_MIDDLE:
                newSpaces.middle.middle = squareValueMap.get(this.state.spaces.middle.middle);
                break;
            case squareNames.MIDDLE_RIGHT:
                newSpaces.middle.right = squareValueMap.get(this.state.spaces.middle.right);
                break;
            case squareNames.BOTTOM_LEFT:
                newSpaces.bottom.left = squareValueMap.get(this.state.spaces.bottom.left);
                break;
            case squareNames.BOTTOM_MIDDLE:
                newSpaces.bottom.middle = squareValueMap.get(this.state.spaces.bottom.middle);
                break;
            case squareNames.BOTTOM_RIGHT:
                newSpaces.bottom.right = squareValueMap.get(this.state.spaces.bottom.right);
                break;
        }

        this.setState({
            spaces: newSpaces
        });
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