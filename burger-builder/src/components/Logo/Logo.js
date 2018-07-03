import React from 'react';
import PropTypes from 'prop-types';
import classes from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = props => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="BurgerBuilder" />
    </div>
);

Logo.propTypes = {
    height: PropTypes.string
};

export default Logo;