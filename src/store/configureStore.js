import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';
import { reduxLogger } from '../services/reduxLogger';

export default function configureStore(initialState) {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(reduxLogger);
  }

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  let composeEnhancers = compose;
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (
    isDevelopment &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    //composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //use this instead to pass in additional properties if required
  }

  return createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares), ...enhancers)
  );
}
