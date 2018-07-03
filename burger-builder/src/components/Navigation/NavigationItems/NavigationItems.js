import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import NavItem from '../../../model/navigation/NavItem';

const NavigationItems = props => {
    const items = props.items.map((item, index) => (
        <NavigationItem
            link={item.link}
            active={index === 0}>
            {item.label}
        </NavigationItem>
    ));

    return (
        <ul className={classes.NavigationItems}>
            {items}
        </ul>
    );
};

NavigationItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(NavItem)).isRequired
};

export default NavigationItems;