import React from 'react';
import classes from './Header.css';

const Header = props => {
    return (
        <div className={classes.Header}>
            <h1>Tic-Tac-Toe</h1>
            <hr />
        </div>
    );
};

export default Header;