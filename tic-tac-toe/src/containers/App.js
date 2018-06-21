import React, { Component } from 'react';
import classes from './App.css';
import Board from '../components/Board/Board';
import Header from '../components/Header/Header';
import Winner from '../components/Winner/Winner';
import { updateSpace } from './App.actions';

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
        }
    };

    squareClickedHandler = key => {
        const spaces = updateSpace(key, {...this.state.spaces});
        this.setState({
            spaces
        });
    };

    render() {
        return (
            <div className={classes.App}>
                <Header />
                <Board
                    spaces={this.state.spaces}
                    squareClick={this.squareClickedHandler} />
                <Winner />
            </div>
        );
    }
}

export default App;
