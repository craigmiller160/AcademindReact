import React, { Component } from 'react';
import Person from './Person/Person';

class People extends Component {

    render() {
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