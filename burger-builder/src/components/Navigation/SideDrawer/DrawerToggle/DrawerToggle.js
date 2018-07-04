import React from 'react';
import classes from './DrawerToggle.css';
import PropTypes from 'prop-types';

const DrawerToggle = props => (
    <div className={classes.DrawerToggle} onClick={props.click}>
        <div />
        <div />
        <div />
    </div>
);

DrawerToggle.propTypes = {
    click: PropTypes.func
};

export default DrawerToggle;