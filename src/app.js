import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import jsToImmutable from 'shared/utils/jsToImmutable';

import ShoppingCart from 'modules/cart/components/ShoppingCart';

import createStore from 'store/createStore';

const store = createStore(jsToImmutable(window.__INITIAL_STATE__ || {}));

render(
  <Provider store={ store }>
    <ShoppingCart />
  </Provider>,
  document.getElementById('root')
);
