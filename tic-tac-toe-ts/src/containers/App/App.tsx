import * as React from 'react';
import * as classes from './App.css';
import { AppState } from "./AppState";
import { TicTacToe } from "../../data/TicTacToe";

class App extends React.Component<{},AppState> {

    state = {
        spaces: new TicTacToe(),
        winner: ''
    };

    public render() {
        return (
            <div className={classes.App}>
                <h1>Testing 123</h1>
            </div>
        );
    }
}

export default App;
