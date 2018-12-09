import * as orderActionTypes from './orderActionTypes';

const initialState = {
    orderLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case orderActionTypes.PURCHASE_BURGER_SUCCESS:
            return {
                ...state,
                orderLoading: false
            };
        case orderActionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                orderLoading: false
            };
        case orderActionTypes.START_PURCHASE_BURGER:
            return {
                ...state,
                orderLoading: true
            };
        default:
            return state;
    }
};

export default reducer;