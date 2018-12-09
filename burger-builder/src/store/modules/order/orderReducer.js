import * as orderActionTypes from './orderActionTypes';

const initialState = {
    orders: [],
    orderLoading: false
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.order.id
    };

    return {
        ...state,
        orderLoading: false,
        orders: state.orders.concat(newOrder)
    };
};

const purchaseBurgerFail = (state, action) => {
    return {
        ...state,
        orderLoading: false
    };
};

const startPurchaseBurger = (state, action) => {
    return {
        ...state,
        orderLoading: true
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case orderActionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);
        case orderActionTypes.PURCHASE_BURGER_FAIL:
            return purchaseBurgerFail(state, action);
        case orderActionTypes.START_PURCHASE_BURGER:
            return startPurchaseBurger(state, action);
        default:
            return state;
    }
};

export default reducer;