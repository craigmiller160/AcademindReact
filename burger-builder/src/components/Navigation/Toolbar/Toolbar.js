import React from 'react';
import PropTypes from 'prop-types';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavItem from '../../../model/navigation/NavItem';
import SideDrawerToggle from './SideBarToggle/SideDrawerToggle';

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <SideDrawerToggle click={props.toggleSideBar} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems items={props.items} />
        </nav>
    </header>
);

Toolbar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(NavItem)).isRequired,
    toggleSideBar: PropTypes.func
};

export default Toolbar;