import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
    }

    hasChildren = () => {
        return this.props.children != null && this.props.children.length > 0;
    };

    render() {
        console.log('[Person.js] Inside Render');
        const children = this.hasChildren() > 0 ? <p>{this.props.children}</p> : null;

        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                {children}
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        );
        // return [
        //     <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <div key="2">{children}</div>,
        //     <input key="3" type="text" onChange={this.props.change} value={this.props.name} />
        // ];
    }

}

export default Person;