import {
  COUNT_RENDER,
} from './actionTypes';

export function renderComponent(id) {
  return {
    type: COUNT_RENDER,
    payload: id,
  };
}
