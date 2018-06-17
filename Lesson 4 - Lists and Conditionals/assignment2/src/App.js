import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

export default class App extends Component {

    state = {
        text: ''
    };

    textChangedHandler = event => {
        this.setState({
            text: event.target.value
        });
    };

    render() {
        const charElems = [...this.state.text].map(letter => (
            <Char letter={letter} />
        ));

        return (
            <div className="App">
                <h1>Assignment 2</h1>
                <input type="text" onChange={this.textChangedHandler} value={this.state.text} />
                <Validation text={this.state.text} />
                <hr />
                {charElems}
            </div>
        );
    }
}