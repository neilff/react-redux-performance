import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import logger from './middleware/logger';

import rootReducer from './rootReducer';

const middlewares = __DEV__ ?
  [thunk, logger] :
  [thunk];

function configureStore(initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}

export default configureStore;
