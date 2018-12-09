import * as errorActionTypes from './errorActionTypes';

const initialState = {
    error: null
};

const setError = (state, action) => {
    return {
        ...state,
        error: action.error
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case errorActionTypes.SET_ERROR:
            return setError(state, action);
        default:
            return state;
    }
};

export default reducer;