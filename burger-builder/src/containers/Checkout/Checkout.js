import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import * as orderActions from '../../store/modules/order/orderActions';

class Checkout extends Component {

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
                    ingredients={this.props.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route
                    path={`${this.props.match.url}/contact-data`}
                    render={() => (
                        <ContactData
                            ingredients={this.props.ingredients}
                            totalPrice={this.props.totalPrice}
                            tryPurchase={this.props.onTryPurchaseBurger}/>
                    )} />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryPurchaseBurger: orderData => dispatch(orderActions.tryPurchaseBurger(orderData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);