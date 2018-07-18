import React, { Component } from 'react';
import classes from './Input.css';
import PropTypes from 'prop-types';
import nextId from '../../../../util/nextId';

class InputOld extends Component {

    state = {
        id: 0
    };

    componentDidMount() {
        this.setState({id: nextId()});
    }

    render() {
        return (
            <div className={classes.Input}>
                <label htmlFor={this.state.id}>{this.props.label}: </label>
                <input
                    id={this.state.id}
                    className={this.props.className}
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.change} />
            </div>
        );
    }

}

InputOld.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    change: PropTypes.func,
    className: PropTypes.string
};

InputOld.defaultProps = {
    type: 'text'
};

export default InputOld;