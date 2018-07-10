import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Pages from './containers/Pages/Pages';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Pages />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
