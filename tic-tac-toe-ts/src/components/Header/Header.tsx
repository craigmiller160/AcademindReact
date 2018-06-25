import React, { SFC } from 'react';
import classes from './Header.css';

const Header: SFC<{}> = props => {
    return (
        <div className={classes.Header}>
            <h1>Tic-Tac-Toe</h1>
            <hr />
        </div>
    );
};

export default Header;