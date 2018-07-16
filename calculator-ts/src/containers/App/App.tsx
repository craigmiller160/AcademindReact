import React, { Component, ReactNode } from 'react';
import classes from './App.css';
import Buttons from '../../components/Buttons/Buttons';
import Display from '../../components/Display/Display';
import IAppState from './IAppState';
import calculate from '../../util/calculate';
import History from '../../components/History/History';

class App extends Component<{},IAppState> {

    public state = {
        displayValue: '0',
        history: []
    };

    public buttonClickHandler = (type: string): void => {
        this.setState(prevState => {
            try {
                const history = prevState.history.slice();
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

                if (type === '=' && newValue !== '0' && newValue !== oldValue) {
                    history.push(oldValue);
                }

                return {displayValue: newValue, history};
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
                <hr />
                <History history={this.state.history} />
            </div>
        );
    }
}

export default App;
