import * as orderActionTypes from './orderActionTypes';
import axiosOrders from '../../../http/axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: orderActionTypes.PURCHASE_BURGER_SUCCESS,
        id,
        orderData
    }
};

export const purchaseBurgerFail = error => {
    return {
        type: orderActionTypes.PURCHASE_BURGER_FAIL,
        error
    }
};

export const tryPurchaseBurger = orderData => {
    return async dispatch => {
        try {
            const res = await axiosOrders.post('/orders.json', orderData);
            dispatch(purchaseBurgerSuccess(res.data.name, orderData));
        }
        catch (ex) {
            dispatch(purchaseBurgerFail(ex));
        }
    }
};