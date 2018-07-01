import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControl.css';

const BuildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

BuildControl.propTypes = {
    label: PropTypes.string.isRequired,
    added: PropTypes.func.isRequired,
    removed: PropTypes.func.isRequired
};

export default BuildControl;