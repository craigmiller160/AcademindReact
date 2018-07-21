import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axiosOrders from '../../http/axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [], //TODO this goes to redux but needs asynchronous code in redux
        loading: true
    };

    async componentDidMount() {
        try {
            const res = await axiosOrders.get('/orders.json');
            const orders = Object.keys(res.data).map(key => ({
                id: key,
                ...res.data[key]
            }));
            this.setState({orders});
        }
        catch (ex) {
            console.log(ex);
        }
        finally {
            this.setState({loading: false});
        }
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }

}

export default withErrorHandler(Orders, axiosOrders);