import * as orderActionTypes from './orderActionTypes';

const initialState = {
    orders: [],
    orderLoading: false
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.id
    };

    return {
        ...state,
        orderLoading: false,
        orders: state.orders.concat(newOrder)
    };
};

const orderAsyncFail = (state, action) => {
    return {
        ...state,
        orderLoading: false
    };
};

const startOrderAsync = (state, action) => {
    return {
        ...state,
        orderLoading: true
    };
};

const setOrders = (state, action) => {
    return {
        ...state,
        orders: action.orders,
        orderLoading: false
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case orderActionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);
        case orderActionTypes.ORDER_ASYNC_FAIL:
            return orderAsyncFail(state, action);
        case orderActionTypes.START_ORDER_ASYNC:
            return startOrderAsync(state, action);
        case orderActionTypes.SET_ORDERS:
            return setOrders(state, action);
        default:
            return state;
    }
};

export default reducer;