import { fromJS } from 'immutable';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SELECT_STATE,
  CHANGE_QUANTITY,
} from 'modules/cart/actionTypes';

import { itemsAvailable } from 'modules/cart/constants';

const demoItems = itemsAvailable.take(3).map(i => i.set('quantity', 3));

const INITIAL_STATE = fromJS({
  items: demoItems,
  state: 'ON',
});

export default function cartReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ADD_ITEM:
      return state.setIn(['items', payload], itemsAvailable.get(payload).set('quantity', 1));

    case REMOVE_ITEM:
      return state.updateIn(['items'], (items) => {
        return items.filter((i) => i.get('id') !== payload);
      });

    case SELECT_STATE:
      return state.set('state', payload);

    case CHANGE_QUANTITY:
      return state.updateIn(['items', payload.index, 'quantity'], i => {
        const newVal = i + payload.change;
        return newVal > 1 ? newVal : 1;
      });

    default:
      return state;
  }
}
