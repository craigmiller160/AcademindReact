const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'INC_COUNTER':
            newState.counter++;
            break;
        case 'ADD_COUNTER':
            newState.counter += action.value;
            break;
    }

    return newState;
};

// Store
store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]: ', store.getState());
});

store.dispatch({type: 'INC_COUNTER'});