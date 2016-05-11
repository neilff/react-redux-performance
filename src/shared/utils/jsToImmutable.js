import { fromJS } from 'immutable';

/**
 * Provided an initial state object, it will convert it into an Immutable
 * initial state.
 *
 * @param {object} initialState Initial state object
 * @return {object} Object with Immutable properties
 */
export default function jsToImmutable(initialState) {
  const reducerKeys = Object.keys(initialState);
  return reducerKeys.reduce((acc, i) => {
    acc[i] = fromJS(initialState[i]);

    return acc;
  }, {});
}
