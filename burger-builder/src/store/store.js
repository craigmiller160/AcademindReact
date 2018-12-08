import { createStore } from 'redux';
import burgerReducer from './modules/burger/burgerReducer';

const store = createStore(
    burgerReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;