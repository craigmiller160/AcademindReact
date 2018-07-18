import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.css';

const Input = props => {
    const domProps = {...props};
    delete domProps.inputType;

    let inputElement = null;
    switch (props.inputType) {
        case 'textarea':
            inputElement = <textarea className={classes.InputElement} {...domProps} />;
            break;
        case 'input':
        default:
            inputElement = <input className={classes.InputElement} {...domProps} />;
            break;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

Input.propTypes = {
    inputType: PropTypes.string.isRequired
};

export default Input;