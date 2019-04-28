import { combineReducers } from 'redux';
//import { connectRouter } from 'connected-react-router';
import { barsReducer } from '../Bar/reducers';

const reducers = { bars: barsReducer };

export default () =>
  combineReducers({
    //router: connectRouter(history),
    ...reducers
  });
