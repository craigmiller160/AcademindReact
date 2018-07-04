import React from 'react';
import PropTypes from 'prop-types';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavItem from '../../../model/navigation/NavItem';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = props => {
    const attachedClasses = [classes.SideDrawer];
    if (props.open) {
        attachedClasses.push(classes.Open);
    }
    else {
        attachedClasses.push(classes.Close);
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems items={props.items}/>
                </nav>
            </div>
        </Aux>
    );
};

SideDrawer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(NavItem)).isRequired,
    closed: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default SideDrawer;