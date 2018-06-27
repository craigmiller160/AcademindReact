import React, { Component } from 'react';
import Person from './Person/Person';

class People extends Component {

    constructor(props) {
        super(props);
        console.log('[People.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[People.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[People.js] Inside componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('[UPDATE People.js] Inside componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE People.js] Inside shouldComponentUpdate', nextProps, nextState);
        // return nextProps.people !== this.props.people;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE People.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE People.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[People.js] Inside Render');
        let peopleElems = null;
        if (this.props.showPeople) {
            peopleElems = this.props.people.map((person, index) => (
                <Person
                    key={person.id}
                    click={this.props.personClicked.bind(this, index)}
                    change={event => this.props.personNameChanged(event, person.id)}
                    name={person.name}
                    age={person.age}
                    position={index}>
                    {person.children}
                </Person>
            ));
        }

        return peopleElems;
    }

}

export default People;