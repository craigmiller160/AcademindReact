import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Input.css';
import nextId from '../../../../util/nextId';

class Input extends Component {

    state = {
        id: 0
    };

    componentDidMount() {
        this.setState({id: nextId()});
    }

    render() {
        let inputElement = null;
        switch (this.props.elementType) {
            case 'textarea':
                inputElement =
                    <textarea
                        id={this.state.id}
                        className={classes.InputElement}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.props.change} />;
                break;
            case 'select':
                inputElement = (
                    <select
                        id={this.state.id}
                        className={classes.InputElement}
                        value={this.props.value}
                        {...this.props.elementConfig}
                        onChange={this.props.change}>
                        {this.props.elementConfig.options.map(option => (
                            <option
                                key={option.value}
                                value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </select>
                );
                break;
            case 'input':
            default:
                inputElement =
                    <input
                        id={this.state.id}
                        className={classes.InputElement}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.props.change} />;
                break;
        }

        return (
            <div className={classes.Input}>
                <label htmlFor={this.state.id} className={classes.Label}>{this.props.label}</label>
                {inputElement}
            </div>
        );
    }

}

Input.propTypes = {
    elementType: PropTypes.string.isRequired,
    elementConfig: PropTypes.object,
    value: PropTypes.string,
    change: PropTypes.func
};

export default Input;