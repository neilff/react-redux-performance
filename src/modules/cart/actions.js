import {
  ADD_ITEM,
  REMOVE_ITEM,
  SELECT_STATE,
  CHANGE_QUANTITY,
} from './actionTypes';

export function addItem(itemId) {
  return {
    type: ADD_ITEM,
    payload: itemId,
  };
}

export function removeItem(itemId) {
  return {
    type: REMOVE_ITEM,
    payload: itemId,
  };
}

export function changeQuantity(index, change) {
  return {
    type: CHANGE_QUANTITY,
    payload: { index, change },
  };
}

export function selectState(state) {
  return {
    type: SELECT_STATE,
    payload: state,
  };
}
