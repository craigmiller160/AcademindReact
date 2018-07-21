import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import queryString from 'query-string';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: { //TODO this goes to redux
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 0 //TODO this goes to redux
    };

    componentWillMount() {
        const queryObj = queryString.parse(this.props.location.search);
        const totalPrice = parseInt(queryObj.totalPrice, 0);
        const ingredients = {};
        Object.keys(queryObj).forEach(key => {
            if (key !== 'totalPrice') {
                ingredients[key] = parseInt(queryObj[key], 0);
            }
        });

        this.setState({ingredients, totalPrice});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace({
            pathname: '/checkout/contact-data',
            search: this.props.location.search
        });
    };

    render() {
        return (
            <div style={{width: '100%'}}>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route
                    path={`${this.props.match.url}/contact-data`}
                    render={() => (
                        <ContactData
                            ingredients={this.state.ingredients}
                            totalPrice={this.state.totalPrice}/>
                    )} />
            </div>
        );
    }

}

export default Checkout;