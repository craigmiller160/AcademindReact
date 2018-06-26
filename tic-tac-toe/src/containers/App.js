import React, { Component } from 'react';
import classes from './App.css';
import Board from '../components/Board/Board';
import Header from '../components/Header/Header';
import Winner from '../components/Winner/Winner';
import { updateSpace, getWinner } from './App.actions';

class App extends Component {

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
        },
        winner: ''
    };

    squareClickedHandler = key => {
        this.setState(prevState => {
            const spaces = updateSpace(key, {...prevState.spaces});
            const winner = getWinner(spaces);
            return {
                spaces,
                winner
            }
        });
    };

    render() {
        return (
            <div className={classes.App}>
                <Header />
                <Board
                    spaces={this.state.spaces}
                    squareClick={this.squareClickedHandler} />
                <Winner winner={this.state.winner} />
            </div>
        );
    }
}

export default App;
