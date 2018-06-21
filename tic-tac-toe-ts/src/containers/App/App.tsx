import * as React from 'react';
import { TicTacToe } from "../../data/TicTacToe/TicTacToe";
import * as classes from './App.css';
import { IAppState } from "./IAppState";

class App extends React.Component<{},IAppState> {

    public state = {
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
