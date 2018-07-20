import * as actions from './actions';

const initialState = {
    counter: 0,
    results: []
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
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            };
        case actions.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(result => result.id !== action.value)
            };
        default:
            return state;
    }
};

export default reducer;