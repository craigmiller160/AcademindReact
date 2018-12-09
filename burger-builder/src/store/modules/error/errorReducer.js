import * as errorActionTypes from './errorActionTypes';

const initialState = {
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case errorActionTypes.SET_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;