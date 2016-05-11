import createLogger from 'redux-logger';
import immutableToJS from 'shared/utils/immutableToJS';

// Configure logging middleware
const logger = createLogger({
  collapsed: true,
  stateTransformer: (state) => {
    return immutableToJS(state);
  },
  predicate: (getState, { type }) => {
    // List of actions we want to ignore
    const blacklist = [];

    return blacklist.every(i => type !== i);
  },
});

export default logger;
