import { createStore } from 'redux';
import burgerReducer from './reducers/burgerReducer';

const store = createStore(burgerReducer);

export default store;