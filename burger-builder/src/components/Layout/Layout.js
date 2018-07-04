import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import burgerNavItems from '../../model/navigation/BurgerNavItems';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    };

    render() {
        return (
            <Aux>
                <Toolbar
                    items={burgerNavItems}
                    toggleSideBar={this.sideDrawerOpenHandler} />
                <SideDrawer
                    items={burgerNavItems}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;