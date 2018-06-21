import React from 'react';
import PropTypes from 'prop-types';
import classes from './Winner.css';

const Winner = props => {
    return (
        <div>
            <hr />
            <div className={classes.Winner}>
                <p>Winner: {props.winner}</p>
            </div>
        </div>
    );
};

Winner.propTypes = {
    winner: PropTypes.string
};

export default Winner;