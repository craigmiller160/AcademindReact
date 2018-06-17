import React from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {
    const pClasses = [];
    if (props.peopleLength <= 2) {
        pClasses.push(classes.red);
    }

    if (props.peopleLength <= 1) {
        pClasses.push(classes.bold);
    }

    const bClasses = [];
    if (props.showPeople) {
        bClasses.push(classes.Red);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={pClasses.join(' ')}>This is really working</p>
            <button className={bClasses.join(' ')} onClick={props.togglePeople}>Toggle People</button>
        </div>
    );
};

export default Cockpit;