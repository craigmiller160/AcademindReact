import * as actions from './actions';

const initialState = {
    people: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_PERSON:
            return {
                ...state,
                people: state.people.concat(action.value)
            };
        case actions.DEL_PERSON:
            return {
                ...state,
                people: state.people.filter(person => person.id !== action.value)
            };
        default:
            return state;
    }
};

export default reducer;