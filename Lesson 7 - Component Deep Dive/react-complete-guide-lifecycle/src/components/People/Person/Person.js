import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {

    hasChildren = () => {
        return this.props.children != null && this.props.children.length > 0;
    };

    render() {
        const children = this.hasChildren() > 0 ? <p>{this.props.children}</p> : null;

        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                {children}
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        );
    }

}

export default Person;