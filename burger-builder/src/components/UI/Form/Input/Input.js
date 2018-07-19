import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Input.css';
import * as inputTypes from '../../../../model/form/InputTypes';
import nextId from '../../../../util/nextId';

class Input extends Component {

    state = {
        id: 0,
        touched: false
    };

    componentDidMount() {
        this.setState({id: nextId()});
    }

    inputChangeHandler = event => {
        this.setState({touched: true});
        this.props.change(event);
    };

    render() {
        const inputClasses = [classes.InputElement];
        if (this.props.invalid && this.state.touched) {
            inputClasses.push(classes.Invalid);
        }

        let inputElement = null;
        switch (this.props.elementType) {
            case inputTypes.TEXTAREA:
                inputElement =
                    <textarea
                        id={this.state.id}
                        className={inputClasses.join(' ')}
                        name={this.props.elementName}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.inputChangeHandler} />;
                break;
            case inputTypes.SELECT:
                inputElement = (
                    <select
                        id={this.state.id}
                        className={inputClasses.join(' ')}
                        name={this.props.elementName}
                        value={this.props.value}
                        {...this.props.elementConfig}
                        onChange={this.inputChangeHandler}>
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
                        className={inputClasses.join(' ')}
                        name={this.props.elementName}
                        {...this.props.elementConfig}
                        value={this.props.value}
                        onChange={this.inputChangeHandler} />;
                break;
            default:
                throw new Error(`Invalid elementType: ${this.props.elementType}`);
        }

        return (
            <div className={classes.Input}>
                <label htmlFor={this.state.id} className={classes.Label}>{this.props.elementConfig.label}</label>
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
    change: PropTypes.func,
    invalid: PropTypes.bool
};

export default Input;