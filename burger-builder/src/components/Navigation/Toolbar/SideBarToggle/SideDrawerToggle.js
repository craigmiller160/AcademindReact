import React from 'react';
import PropTypes from 'prop-types';

const SideDrawerToggle = props => (
    <div>
        <button onClick={props.click}>Toggle</button>
    </div>
);

SideDrawerToggle.propTypes = {
    click: PropTypes.func
};

export default SideDrawerToggle;