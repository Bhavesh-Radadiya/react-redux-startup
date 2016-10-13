import { combineReducers } from 'redux';
import UserReducer from './userReducer';

const allReducers = combineReducers({
  users: UserReducer
});

export default allReducers;
