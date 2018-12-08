import * as actions from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const incCounter = (state, action) => {
    return updateObject(state, {
        counter: state.counter + 1
    });
};

const addCounter = (state, action) => {
    return updateObject(state, {
        counter: state.counter + action.value
    });
};

const decCounter = (state, action) => {
    return updateObject(state, {
        counter: state.counter - 1
    });
};

const subCounter = (state, action) => {
    return updateObject(state, {
        counter: state.counter - action.value
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INC_COUNTER: return incCounter(state, action);
        case actions.ADD_COUNTER: return addCounter(state, action);
        case actions.DEC_COUNTER: return decCounter(state, action);
        case actions.SUB_COUNTER: return subCounter(state, action);
        default: return state;
    }
};

export default reducer;