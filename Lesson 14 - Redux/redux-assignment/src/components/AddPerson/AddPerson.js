import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {

    state = {
        name: '',
        age: 0
    };

    nameChangedHandler = event => {
        this.setState({name: event.target.value});
    };

    ageChangedHandler = event => {
        this.setState({age: event.target.value});
    };

    personAddedHandler = () => {
        const person = {...this.state};
        this.props.personAdded(person);
        this.setState({name: '', age: 0});
    };

    render() {
        return (
            <div className="AddPerson">
                <input type="text" placeholder="Name" onChange={this.nameChangedHandler} value={this.state.name} />
                <input type="number" placeholder="Age" onChange={this.ageChangedHandler} value={this.state.age} />
                <button onClick={this.personAddedHandler}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;