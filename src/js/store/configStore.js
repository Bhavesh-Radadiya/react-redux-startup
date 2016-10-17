import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const logger = createLogger();
const router = routerMiddleware(browserHistory);
const createStoreWithMiddleware = applyMiddleware(thunk, logger, router)(createStore);

export default function configStore(initialState) {
  return createStoreWithMiddleware(rootReducers, initialState);
}
