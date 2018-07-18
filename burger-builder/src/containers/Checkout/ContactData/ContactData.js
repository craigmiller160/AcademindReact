import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import { ingredientsPropType } from '../../../model/ingredient/BurgerIngredients';
import axiosOrders from '../../../http/axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import Input from '../../../components/UI/Form/Input/Input';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderBurgerHandler = async event => {
        event.preventDefault();
        this.setState({loading: true}, this.addNewPurchase);
    };

    async addNewPurchase() {
        try {
            const order = {
                ingredients: this.props.ingredients,
                price: this.props.totalPrice,
                customer: {
                    name: 'Craig Miller',
                    address: {
                        street: 'Test street 1',
                        zipCode: '41351',
                        country: 'USA'
                    },
                    email: 'test@test.com'
                },
                deliveryMethod: 'fastest'
            };
            const res = await axiosOrders.post('/orders.json', order);
            console.log(res);
        }
        catch (ex) {
            console.log(ex);
        }
        finally {
            this.setState({loading: false});
            this.props.history.push('/');
        }
    }

    render() {
        let form = (
            <form>
                <Input inputType="input" label="Name" type="text" name="name" placeholder="Your name" />
                <Input inputType="input" label="Email" type="email" name="email" placeholder="Your email" />
                <Input inputType="input" label="Street" type="text" name="street" placeholder="Your street" />
                <Input inputType="input" label="Postal Code" type="text" name="postalCode" placeholder="Your postal code" />
                <Button btnType="Success" clicked={this.orderBurgerHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
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
    totalData: PropTypes.number
};

export default withRouter(ContactData);