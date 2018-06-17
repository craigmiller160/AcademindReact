import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

const people = [
    {
        id: 1,
        name: 'Max',
        age: 28,
        children: null
    },
    {
        id: 2,
        name: 'Manu',
        age: 29,
        children: 'My Hobbies: Racing'
    },
    {
        id: 3,
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
        const newPeople = this.state.people.slice();
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

    nameChangedHandler = (event, id) => {
        const newPeople = this.state.people.slice();
        const index = newPeople.findIndex(person => person.id === id);
        if (index >= 0) {
            newPeople[index] = {...newPeople[index]};
            newPeople[index].name = event.target.value;
            this.setState({
                people: newPeople
            });
        }
    };

    deletePersonHandler = index => {
        const newPeople = this.state.people.slice();
        newPeople.splice(index, 1);
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
            peopleElems = this.state.people.map((person, index) => (
                <Person
                    key={person.id}
                    click={this.deletePersonHandler.bind(this, index)}
                    change={event => this.nameChangedHandler(event, person.id)}
                    name={person.name}
                    age={person.age}>
                    {person.children}
                </Person>
            ));
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