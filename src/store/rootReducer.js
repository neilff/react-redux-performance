import { combineReducers } from 'redux';

import cart from 'modules/cart/reducer';
import debug from 'modules/debug/reducer';

export default combineReducers({
  cart,
  debug,
});
