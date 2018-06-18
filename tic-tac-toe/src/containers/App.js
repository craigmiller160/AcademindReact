import React, { Component } from 'react';
import classes from './App.css';
import Board from './Board/Board';
import Header from '../components/Header/Header';

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Header />
                <Board />
            </div>
        );
    }
}

export default App;
