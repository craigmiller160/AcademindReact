import React, { Component, ReactNode } from 'react';
import classes from './App.css';
import Buttons from '../../components/Buttons/Buttons';

class App extends Component<{},{}> {

    public state = {

    };

    public buttonClickHandler = (type: string): void => {
        console.log('Clicked: ' + type); // TODO delete this
    };

    public render(): ReactNode {
        return (
            <div className={classes.App}>
                <Buttons action={this.buttonClickHandler} />
            </div>
        );
    }
}

export default App;
