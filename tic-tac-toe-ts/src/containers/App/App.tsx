import React, { Component, MouseEvent, ReactNode } from 'react';
import Board from "../../components/Board/Board";
import Header from "../../components/Header/Header";
import Winner from "../../components/Winner/Winner";
import { TicTacToe } from "../../data/TicTacToe/TicTacToe";
import { getWinner, updateSpace } from './App.actions';
import classes from './App.css';
import { IAppState } from './IAppState';

class App extends Component<{},IAppState> {

    public state = {
        spaces: new TicTacToe(),
        winner: ''
    };

    public squareClickHandler = (event: MouseEvent<HTMLElement>): void => {
        const spaces = updateSpace(event, {...this.state.spaces});
        const winner = getWinner(spaces);
        this.setState({
            spaces,
            winner
        });
    };

    public render(): ReactNode {
        return (
            <div className={classes.App}>
                <Header />
                <Board
                    spaces={this.state.spaces}
                    squareClick={this.squareClickHandler} />
                <Winner winner={this.state.winner} />
            </div>
        );
    }
}

export default App;
