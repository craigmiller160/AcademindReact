import * as actions from '../actions/actions';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INC_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actions.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actions.DEC_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actions.SUB_COUNTER:
            return {
                ...state,
                counter: state.counter - action.value
            };
        default:
            return state;
    }
};

export default reducer;