import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axiosOrders from '../../http/axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as errorActions from '../../store/modules/error/errorActions';
import * as orderActions from '../../store/modules/order/orderActions';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount() {
        this.props.getAllOrders();
    }

    render() {
        let orders = <Spinner />;
        if (!this.props.orderLoading) {
            orders = (
                <div>
                    {this.props.orders.map(order => (
                        <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.price} />
                    ))}
                </div>
            );
        }

        return orders;
    }

}

const mapStateToProps = state => {
    return {
        error: state.error.error,
        orderLoading: state.order.orderLoading,
        orders: state.order.orders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setError: error => dispatch(errorActions.setError(error)),
        getAllOrders: () => dispatch(orderActions.getAllOrders())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axiosOrders));