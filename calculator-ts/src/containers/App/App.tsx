import React, { Component, ReactNode } from 'react';
import classes from './App.css';
import Buttons from '../../components/Buttons/Buttons';
import Display from '../../components/Display/Display';
import IAppState from './IAppState';
import calculate from '../../util/calculate';

class App extends Component<{},IAppState> {

    public state = {
        displayValue: ''
    };

    public buttonClickHandler = (type: string): void => {
        this.setState(prevState => {
            try {
                let newValue = '';
                switch (type) {
                    case '+':
                    case '-':
                    case '*':
                    case '/':
                        newValue = `${prevState.displayValue} ${type} `;
                        break;
                    case '=':
                        newValue = calculate(prevState.displayValue);
                        break;
                    case 'Clear':
                        newValue = '';
                        break;
                    default:
                        newValue = `${prevState.displayValue}${type}`;
                        break;
                }

                return {displayValue: newValue};
            }
            catch (ex) {
                alert(ex.message);
            }
            return null;
        });
    };

    public render(): ReactNode {
        return (
            <div className={classes.App}>
                <Display value={this.state.displayValue}/>
                <hr />
                <Buttons action={this.buttonClickHandler} />
            </div>
        );
    }
}

export default App;
