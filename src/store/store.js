/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import reducer from '../reducers.js';

const persistConfig = {
  key: 'root',
  storage,
};

const pReducer = persistReducer(persistConfig, reducer);
const store = createStore(
  pReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object'
    && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  ),
);
const persistor = persistStore(store);
export { store, persistor };
