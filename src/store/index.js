import { createStore } from 'redux';
import reducer from './appReducer';

const store = createStore(reducer);

export default store;