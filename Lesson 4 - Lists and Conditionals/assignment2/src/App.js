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

    removeLetterHandler = index => {
        const text = this.state.text;
        this.setState({
            text: text.slice(0, index) + text.slice(index + 1, text.length)
        });
    };

    render() {
        const charElems = [...this.state.text].map((letter, index) => (
            <Char letter={letter} index={index} key={index} click={this.removeLetterHandler.bind(this, index)} />
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