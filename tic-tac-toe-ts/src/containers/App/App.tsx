import * as React from 'react';
import Header from "../../components/Header/Header";
import Board from "../../components/Board/Board";
import { TicTacToe } from "../../data/TicTacToe/TicTacToe";
import { updateSpace } from './App.actions';
import * as classes from './App.css';
import { IAppState } from './IAppState';

class App extends React.Component<{},IAppState> {

    public state = {
        spaces: new TicTacToe(),
        winner: ''
    };

    public squareClickHandler = (key: string): void => {
        const spaces = updateSpace(key, {...this.state.spaces});
        this.setState({
            spaces
        });
    };

    public render() {
        return (
            <div className={classes.App}>
                <Header />
                <Board
                    spaces={this.state.spaces}
                    squareClick={this.squareClickHandler} />
            </div>
        );
    }
}

export default App;
