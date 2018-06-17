import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import { peopleData } from '../data/peopleData';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
    state = {
        people: peopleData,
        showPeople: false
    };

    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount');
    }

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
        console.log('[App.js] Inside Render');
        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.title}
                    peopleLength={this.state.people.length}
                    showPeople={this.state.showPeople}
                    togglePeople={this.togglePersonsHandler} />
                <People
                    showPeople={this.state.showPeople}
                    people={this.state.people}
                    personClicked={this.deletePersonHandler}
                    personNameChanged={this.nameChangedHandler} />
            </div>
        );
    }
}

export default App;