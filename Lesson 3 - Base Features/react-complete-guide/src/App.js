import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

const people = [
    {
        name: 'Max',
        age: 28,
        children: null
    },
    {
        name: 'Manu',
        age: 29,
        children: 'My Hobbies: Racing'
    },
    {
        name: 'Stephanie',
        age: 26,
        children: null
    }
];

export default class App extends Component {
    state = {
        people,
        otherState: 'some other value'
    };

    // noinspection JSMethodCanBeStatic
    switchNameHandler = (newName) => {
        // DON'T DO THIS: this.state.people[0].name = 'Maximilian';
        const newPeople = people.slice();
        newPeople[0].name = newName;
        this.setState({
            people: newPeople
        });
    };

    nameChangedHandler = (event) => {
        const newPeople = people.slice();
        newPeople[1].name = event.target.value;
        this.setState({
            people: newPeople
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working</p>
                <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
                <Person
                    click={this.switchNameHandler.bind(this, 'Max!')}
                    change={this.nameChangedHandler}
                    name={this.state.people[0].name}
                    age={this.state.people[0].age} />
                <Person
                    click={this.switchNameHandler.bind(this, 'Max!')}
                    change={this.nameChangedHandler}
                    name={this.state.people[1].name}
                    age={this.state.people[1].age}>
                    My Hobbies: Racing
                </Person>
                <Person
                    click={this.switchNameHandler.bind(this, 'Max!')}
                    change={this.nameChangedHandler}
                    name={this.state.people[2].name}
                    age={this.state.people[2].age} />
                <p>{this.state.otherState}</p>
            </div>
        );
    //   return React.createElement('div', {className: 'App'},
    //       React.createElement('h1', null, 'Hi, I\'m a React App')
    //   );
    }
}