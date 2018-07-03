import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItem.css';

const NavigationItem = props => {
    const linkClass = props.active ? classes.active : null;

    return (
        <li className={classes.NavigationItem}>
            <a href={props.link} className={linkClass}>{props.children}</a>
        </li>
    );
};

NavigationItem.propTypes = {
    link: PropTypes.string.isRequired,
    active: PropTypes.bool
};

export default NavigationItem;