import { Iterable } from 'immutable';

/**
 * Provided an Immutable state object, it will return a JavaScript state tree
 *
 * @param {object} state State to convert from Immutable
 * @return {object} JavaScript state object
 */
export default function immutableToJS(state) {
  return Object.keys(state).reduce((newState, key) => {
    const val = state[key];
    newState[key] = Iterable.isIterable(val) ? val.toJS() : val;
    return newState;
  }, {});
}
