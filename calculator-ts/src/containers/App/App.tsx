import React, { Component, ReactNode } from 'react';
import classes from './App.css';
import Buttons from '../../components/Buttons/Buttons';
import Display from '../../components/Display/Display';
import IAppState from './IAppState';
import calculate from '../../util/calculate';

class App extends Component<{},IAppState> {

    public state = {
        displayValue: '0'
    };

    public buttonClickHandler = (type: string): void => {
        this.setState(prevState => {
            try {
                const oldValue = prevState.displayValue === '0' ? '' : prevState.displayValue;
                let newValue = '';
                switch (type) {
                    case '+':
                    case '-':
                    case '*':
                    case '/':
                        newValue = `${oldValue} ${type} `;
                        break;
                    case '=':
                        newValue = calculate(oldValue);
                        break;
                    case 'Clear':
                        newValue = '';
                        break;
                    default:
                        newValue = `${oldValue}${type}`;
                        break;
                }

                if (newValue === '') {
                    newValue = '0';
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
