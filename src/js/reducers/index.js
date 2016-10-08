import { combineReducers } from 'redux';
import UserReducer from './user-reducer';

const allReducers = combineReducers({
  users: UserReducer
});

export default allReducers;
