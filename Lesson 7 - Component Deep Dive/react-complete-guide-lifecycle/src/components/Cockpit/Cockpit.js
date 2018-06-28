import React, { Fragment } from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {
    const pClasses = [];
    if (props.peopleLength <= 2) {
        pClasses.push(classes.red);
    }

    if (props.peopleLength <= 1) {
        pClasses.push(classes.bold);
    }

    const bClasses = [classes.Button];
    if (props.showPeople) {
        bClasses.push(classes.Red);
    }

    return (
        <Fragment>
            <h1>{props.title}</h1>
            <p className={pClasses.join(' ')}>This is really working</p>
            <button className={bClasses.join(' ')} onClick={props.togglePeople}>Toggle People</button>
            <button onClick={props.login}>Log in</button>
        </Fragment>
    );
};

export default Cockpit;