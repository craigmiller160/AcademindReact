import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import burgerNavItems from '../../model/navigation/BurgerNavItems';

const Layout = props => (
    <Aux>
        <Toolbar items={burgerNavItems} />
        <SideDrawer items={burgerNavItems} />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;