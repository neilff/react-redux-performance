/**
 * Wraps setTimeout in a Promise
 *
 * @param {Number} ms Miliseconds
 * @return {Promise}
 */
const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  })
);

export default wait;
