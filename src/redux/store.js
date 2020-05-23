import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'

import rootReducer from './rootReducer';

// Store an array of all middlewares
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
