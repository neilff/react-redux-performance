import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import jsToImmutable from 'shared/utils/jsToImmutable';

import ShoppingCart from 'modules/cart/components/ShoppingCart';
import CountRenders from 'modules/debug/components/CountRenders';

import createStore from 'store/createStore';

const store = createStore(jsToImmutable(window.__INITIAL_STATE__ || {}));

render(
  <Provider store={ store }>
    <div>
      <ShoppingCart />
      <CountRenders />
    </div>
  </Provider>,
  document.getElementById('root')
);
