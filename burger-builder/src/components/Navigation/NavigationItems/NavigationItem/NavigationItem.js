import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink
                to={props.link}
                exact={props.link === '/'}
                activeClassName={classes.active}>
                {props.children}
            </NavLink>
        </li>
    );
};

NavigationItem.propTypes = {
    link: PropTypes.string.isRequired,
    active: PropTypes.bool
};

export default NavigationItem;