import { combineReducers } from 'redux';
import auth from './auth';
import { routerReducer } from 'react-router-redux';
import newsstockSearch from './newsstockSearch';

const rootReducers = combineReducers({
  auth,
  newsstockSearch,
  routing: routerReducer
});

export default rootReducers;
