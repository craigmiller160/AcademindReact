import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axiosOrders from '../../http/axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
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
                <Order />
                <Order />
            </div>
        );
    }

}

export default withErrorHandler(Orders, axiosOrders);