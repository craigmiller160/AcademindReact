import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row/Row';
import classes from './Board.css';

const Board = props => {
    return (
        <div className={classes.Board}>
            <Row
                top={true}
                spaces={props.spaces.top}
                squareClick={props.squareClick} />
            <Row
                spaces={props.spaces.middle}
                squareClick={props.squareClick} />
            <Row
                bottom={true}
                spaces={props.spaces.bottom}
                squareClick={props.squareClick} />
        </div>
    );
};

Board.propTypes = {
    spaces: PropTypes.shape({
        top: PropTypes.shape({
            left: PropTypes.string,
            middle: PropTypes.string,
            right: PropTypes.string
        }),
        middle: PropTypes.shape({
            left: PropTypes.string,
            middle: PropTypes.string,
            right: PropTypes.string
        }),
        bottom: PropTypes.shape({
            left: PropTypes.string,
            middle: PropTypes.string,
            right: PropTypes.string
        })
    }).isRequired,
    squareClick: PropTypes.func.isRequired
};

export default Board;