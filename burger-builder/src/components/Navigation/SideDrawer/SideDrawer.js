import React from 'react';
import PropTypes from 'prop-types';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavItem from '../../../model/navigation/NavItem';

const SideDrawer = props => {


    return (
        <div className={classes.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems items={props.items}/>
            </nav>
        </div>
    );
};

SideDrawer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(NavItem)).isRequired
};

export default SideDrawer;