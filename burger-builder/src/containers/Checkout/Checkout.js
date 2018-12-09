import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import * as orderActions from '../../store/modules/order/orderActions';
import * as errorActions from '../../store/modules/error/errorActions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axiosOrders from '../../http/axios-orders';

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
        let summary = <Redirect to="/" />;
        if (this.props.ingredients) {
            summary = (
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
                                orderLoading={this.props.orderLoading}
                                tryPurchase={this.props.onTryPurchaseBurger}/>
                        )} />
                </div>
            )
        }

        return summary;
    }

}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        error: state.error.error,
        orderLoading: state.order.orderLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryPurchaseBurger: orderData => dispatch(orderActions.tryPurchaseBurger(orderData)),
        setError: error => dispatch(errorActions.setError(error))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Checkout, axiosOrders));