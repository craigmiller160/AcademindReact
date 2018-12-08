import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import counterReducer from './reducers/counter';
import resultsReducer from './reducers/results';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer,
    results: resultsReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        };
    };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

