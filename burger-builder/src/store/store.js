import { createStore } from 'redux';
import burgerReducer from './modules/burger/burgerReducer';

const store = createStore(burgerReducer);

export default store;