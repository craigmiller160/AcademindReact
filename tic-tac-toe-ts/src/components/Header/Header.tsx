import * as React from 'react';
import * as classes from './Header.css';

const Header: React.SFC<{}> = props => {
    return (
        <div className={classes.Header}>
            <h1>Tic-Tac-Toe</h1>
            <hr />
        </div>
    );
};

export default Header;