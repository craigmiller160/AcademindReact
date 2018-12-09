import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import { ingredientsPropType } from '../../../model/ingredient/BurgerIngredients';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import Input from '../../../components/UI/Form/Input/Input';
import contactDataOrderForm from './contactDataOrderForm';

class ContactData extends Component {

    state = {
        orderForm: contactDataOrderForm,
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