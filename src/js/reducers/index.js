import { combineReducers } from 'redux';
import auth from './auth';
import { routerReducer } from 'react-router-redux';

const rootReducers = combineReducers({
  auth,
  routing: routerReducer
});

export default rootReducers;
