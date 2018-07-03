import React from 'react';
import PropTypes from 'prop-types';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavItem from '../../../model/navigation/NavItem';

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo height="80%" />
        <nav>
            <NavigationItems items={props.items} />
        </nav>
    </header>
);

Toolbar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(NavItem)).isRequired
};

export default Toolbar;