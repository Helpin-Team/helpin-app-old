import { createStore, compose, applyMiddleware } from 'redux';

import ducks from './ducks';

const createAppropriateStore = process.env.NODE_ENV === 'development'
  ? console.tron.createStore
  : createStore;

const store = createAppropriateStore(
  ducks,
);

export default store;
