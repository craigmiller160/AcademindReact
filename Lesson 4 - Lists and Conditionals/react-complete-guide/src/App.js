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
        otherState: 'some other value',
        showPeople: false
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

    togglePersonsHandler = event => {
        const doesShow = this.state.showPeople;
        this.setState({
            showPeople: !doesShow
        })
    };

    nameChangedHandler = event => {
        const newPeople = people.slice();
        newPeople[1].name = event.target.value;
        this.setState({
            people: newPeople
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let peopleElems = null;
        if (this.state.showPeople) {
            peopleElems = (
                <div>
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
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working</p>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle People</button>
                {peopleElems}
                <p>{this.state.otherState}</p>
            </div>
        );
    }
}