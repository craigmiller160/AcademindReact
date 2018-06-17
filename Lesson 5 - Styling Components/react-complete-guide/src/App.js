import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

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

class App extends Component {
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
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
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

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            };
        }

        const classes = [];

        if (this.state.people.length <= 2) {
            classes.push('red');
        }

        if (this.state.people.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working</p>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle People</button>
                {peopleElems}
                <p>{this.state.otherState}</p>
            </div>
        );
    }
}

export default Radium(App);