import React from 'react';
import classes from './Person.css';

//Just a helper function
const hasChildren = props => {
    return props.children != null && props.children.length > 0;
};

const Person = props => {
    const children = hasChildren(props) > 0 ? <p>{props.children}</p> : null;

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {children}
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
};

export default Person;