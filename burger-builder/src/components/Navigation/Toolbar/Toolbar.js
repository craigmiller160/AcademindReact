import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import burgerNavItems from '../../../model/navigation/BurgerNavItems';

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems items={burgerNavItems} />
        </nav>
    </header>
);

export default Toolbar;