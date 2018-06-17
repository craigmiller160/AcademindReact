import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/People/Person/Person'

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

        const pClasses = [];
        if (this.state.people.length <= 2) {
            pClasses.push(classes.red);
        }

        if (this.state.people.length <= 1) {
            pClasses.push(classes.bold);
        }

        const bClasses = [];
        if (this.state.showPeople) {
            bClasses.push(classes.Red);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={pClasses.join(' ')}>This is really working</p>
                <button className={bClasses.join(' ')} onClick={this.togglePersonsHandler}>Toggle People</button>
                {peopleElems}
                <p>{this.state.otherState}</p>
            </div>
        );
    }
}

export default App;