import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Input.css';
import * as inputTypes from '../../../../model/form/InputTypes';
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
            case inputTypes.TEXTAREA:
                inputElement =
                    <textarea
                        id={this.state.id}
                        className={classes.InputElement}
                        name={this.props.elementName}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.props.change} />;
                break;
            case inputTypes.SELECT:
                inputElement = (
                    <select
                        id={this.state.id}
                        className={classes.InputElement}
                        name={this.props.elementName}
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
            case inputTypes.TEXT:
            case inputTypes.NUMBER:
            case inputTypes.CHECK:
            case inputTypes.RADIO:
            case inputTypes.EMAIL:
            case inputTypes.PASSWORD:
                inputElement =
                    <input
                        id={this.state.id}
                        type={this.props.elementType}
                        className={classes.InputElement}
                        name={this.props.elementName}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.props.change} />;
                break;
            default:
                throw new Error(`Invalid elementType: ${this.props.elementType}`);
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
    elementName: PropTypes.string.isRequired,
    elementConfig: PropTypes.object,
    value: PropTypes.any,
    change: PropTypes.func
};

export default Input;