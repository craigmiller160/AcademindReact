import * as actions from './actions';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case actions.INC_COUNTER:
            newState.counter++;
            break;
        case actions.ADD_COUNTER:
            newState.counter += action.value;
            break;
        case actions.DEC_COUNTER:
            newState.counter--;
            break;
        case actions.SUB_COUNTER:
            newState.counter -= action.value;
            break;
    }

    return newState;
};

export default reducer;