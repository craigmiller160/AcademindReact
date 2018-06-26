import React, { Component, Fragment } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import { peopleData } from '../data/peopleData';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';


class App extends Component {
    state = {
        people: peopleData,
        showPeople: false,
        otherState: 'some other value',
        toggleClicked: 0
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

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside componentDidUpdate');
    }

    togglePersonsHandler = event => {
        const doesShow = this.state.showPeople;
        this.setState((prevState, props) => ({
            showPeople: !doesShow,
            toggleClicked: prevState.toggleClicked + 1
        }));
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
            <Fragment>
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
            </Fragment>
        );
    }
}

export default withClass(App, classes.App);