import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import burgerReducer from './modules/burger/burgerReducer';
import errorReducer from './modules/error/errorReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    burger: burgerReducer,
    error: errorReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(applyMiddleware(thunk))
);

export default store;