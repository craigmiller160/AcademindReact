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
                    age={person.age}>
                    {person.children}
                </Person>
            ));
        }

        return peopleElems;
    }

}

export default People;