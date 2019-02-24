import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './index.css';
import RootRoutes from './RootRoutes';
import * as serviceWorker from './serviceWorker';
import {
  getLocalStorage,
  saveToLocalStorage
} from './services/localStorageHelper';
import { getMockData } from './services/mockDataService';

const STORE_KEY = 'store';

const lastAppState = getLocalStorage(STORE_KEY);
const store = configureStore(lastAppState || getMockData());

//this saves all app state to localstorage on all changes
store.subscribe(() => {
  saveToLocalStorage(STORE_KEY, store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <RootRoutes />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
