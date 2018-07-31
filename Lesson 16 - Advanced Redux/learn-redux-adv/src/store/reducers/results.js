import * as actions from '../actions/actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SAVE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.value})
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