import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import { ingredientsPropType } from '../../../model/ingredient/BurgerIngredients';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import Input from '../../../components/UI/Form/Input/Input';
import FormInput from '../../../model/form/FormInput';
import * as inputTypes from '../../../model/form/InputTypes';
import SelectOption from '../../../model/form/SelectOption';

class ContactData extends Component {

    state = {
        orderForm: [
            new FormInput(inputTypes.TEXT, 'name', {
                label: 'Name',
                placeholder: 'Your name'
            }, {
                required: true
            }),
            new FormInput(inputTypes.TEXT, 'street', {
                label: 'Street',
                placeholder: 'Your street'
            }, {
                required: true
            }),
            new FormInput(inputTypes.TEXT, 'zipCode', {
                label: 'Zip Code',
                placeholder: 'Your zip code'
            }, {
                required: true,
                minLength: 5,
                maxLength: 5
            }),
            new FormInput(inputTypes.TEXT, 'country', {
                label: 'Country',
                placeholder: 'Your country'
            }, {
                required: true
            }),
            new FormInput(inputTypes.EMAIL, 'email', {
                label: 'Email',
                placeholder: 'Your email'
            }, {
                required: true
            }),
            new FormInput(inputTypes.SELECT, 'deliveryMethod', {
                label: 'Delivery Method',
                options: [
                    new SelectOption('fastest', 'Fastest'),
                    new SelectOption('cheapest', 'Cheapest')
                ]
            })
        ],
        formIsValid: false
    };

    formInputChangeHandler = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState(prevState => {
            const orderForm = JSON.parse(JSON.stringify(prevState.orderForm));
            const index = orderForm.findIndex(formInput => formInput.elementName === name);
            orderForm[index].value = value;
            orderForm[index].valid = this.checkValidity(value, orderForm[index].validation);

            let formIsValid = true;
            for (let i = 0; i < orderForm.length; i++) {
                if (!orderForm[i].valid) {
                    formIsValid = false;
                    break;
                }
            }

            return {orderForm, formIsValid};
        });
    };

    checkValidity(value, rules) {
        let isValid = true;

        if (rules && rules.required) {
            isValid = !!value && (value.trim ? !!value.trim() : true);
        }

        if (isValid && rules && rules.minLength) {
            isValid = value.length >= rules.minLength;
        }

        if (isValid && rules && rules.maxLength) {
            isValid = value.length <= rules.maxLength;
        }

        return isValid;
    }

    orderBurgerHandler = event => {
        event.preventDefault();
        if (this.state.formIsValid) {
            const formData = {};
            this.state.orderForm
                .forEach(formInput => formData[formInput.elementName] = formInput.value);

            const order = {
                ingredients: this.props.ingredients,
                price: this.props.totalPrice,
                orderData: formData
            };

            this.props.tryPurchase(order);
            // this.props.history.push('/'); //TODO changing this
        }
    };

    render() {
        const formInputs = this.state.orderForm
            .map((formInput, index) => (
                <Input
                    key={index}
                    elementType={formInput.elementType}
                    elementName={formInput.elementName}
                    elementConfig={formInput.elementConfig}
                    value={formInput.value}
                    invalid={!formInput.valid}
                    change={this.formInputChangeHandler} />
            ));

        let form = (
            <form onSubmit={this.orderBurgerHandler}>
                {formInputs}
                <Button
                    btnType="Success"
                    clicked={this.orderBurgerHandler}
                    disabled={!this.state.formIsValid}>
                    ORDER
                </Button>
            </form>
        );

        if (this.props.orderLoading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }

}

ContactData.propTypes = {
    ingredients: ingredientsPropType,
    totalData: PropTypes.number,
    tryPurchase: PropTypes.func,
    orderLoading: PropTypes.bool
};

export default withRouter(ContactData);