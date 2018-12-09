import * as orderActionTypes from './orderActionTypes';
import * as errorActions from '../error/errorActions';
import axiosOrders from '../../../http/axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: orderActionTypes.PURCHASE_BURGER_SUCCESS,
        id,
        orderData
    }
};

export const orderAsyncFail = error => {
    return {
        type: orderActionTypes.ORDER_ASYNC_FAIL,
        error
    }
};

export const startOrderAsync = () => {
    return {
        type: orderActionTypes.START_ORDER_ASYNC
    }
};

export const tryPurchaseBurger = orderData => {
    return async dispatch => {
        try {
            dispatch(startOrderAsync());
            const res = await axiosOrders.post('/orders.json', orderData);
            dispatch(purchaseBurgerSuccess(res.data.name, orderData));
        }
        catch (ex) {
            dispatch(orderAsyncFail(ex));
            dispatch(errorActions.setError(ex));
        }
    }
};

export const setOrders = orders => {
    return {
        type: orderActionTypes.SET_ORDERS,
        orders
    }
};

export const getAllOrders = () => {
    return async dispatch => {
        try {
            dispatch(startOrderAsync());
            const res = await axiosOrders.get('/orders.json');
            const orders = Object.keys(res.data).map(key => ({
                id: key,
                ...res.data[key]
            }));
            dispatch(setOrders(orders));
        }
        catch (ex) {
            dispatch(orderAsyncFail(ex));
            dispatch(errorActions.setError(ex));
        }
    }
};