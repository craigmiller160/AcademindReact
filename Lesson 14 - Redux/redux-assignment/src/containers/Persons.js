import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actions from '../store/actions';

class Persons extends Component {
    state = {
        persons: []
    };

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        };
        this.props.addPerson(newPerson);
    };

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.people.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.delPerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        people: state.people
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPerson: person => dispatch({type: actions.ADD_PERSON, value: person}),
        delPerson: id => dispatch({type: actions.DEL_PERSON, value: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);