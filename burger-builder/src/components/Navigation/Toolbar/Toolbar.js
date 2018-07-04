import React from 'react';
import PropTypes from 'prop-types';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavItem from '../../../model/navigation/NavItem';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggle click={props.toggleSideDrawer} />
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
    toggleSideDrawer: PropTypes.func
};

export default Toolbar;