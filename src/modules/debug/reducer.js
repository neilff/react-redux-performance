import { fromJS } from 'immutable';
import { COUNT_RENDER } from './actionTypes';

const INITIAL_STATE = fromJS({
  rows: 1,
  subtotal: 1,
  total: 1,
  totalTax: 1,
  availableItems: 1,
});

export default function debugReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case COUNT_RENDER:
      return state.updateIn([payload], (i = 0) => i + 1);

    default:
      return state;
  }
}
