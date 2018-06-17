import React from 'react';
import Person from './Person/Person';

const People = props => {
    let peopleElems = null;
    if (props.showPeople) {
        peopleElems = props.people.map((person, index) => (
            <Person
                key={person.id}
                click={props.personClicked.bind(this, index)}
                change={event => props.personNameChanged(event, person.id)}
                name={person.name}
                age={person.age}>
                {person.children}
            </Person>
        ));
    }

    return peopleElems;
};

export default People;