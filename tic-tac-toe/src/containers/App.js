import React, { Component } from 'react';
import classes from './App.css';
import Board from './Board/Board';
import Header from '../components/Header/Header';
import Winner from '../components/Winner/Winner';

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Header />
                <Board />
                <Winner />
            </div>
        );
    }
}

export default App;
