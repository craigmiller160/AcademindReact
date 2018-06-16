import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

const users = [
    'Bob',
    'Cindy'
];

class App extends Component {
    state = {
        users
    };

    changeUsernameHandler = event => {
        const newUsers = users.slice();
        newUsers[0] = event.target.value;
        this.setState({
            users: newUsers
        });
    };

    render() {
        return (
            <div className="App">
                <UserInput change={this.changeUsernameHandler} username={this.state.users[0]} />
                <UserOutput username={this.state.users[0]} />
                <UserOutput username={this.state.users[1]} />
            </div>
        );
    }
}

export default App;
