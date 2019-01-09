var _ = require('lodash');

/**
 * @param {key/path to search in the object} key
 * @param {if key/path is not found then this is used} defaultValue
 * Returns value of input key from the currentData.
 * Or returns defaultValue if key is not found
 */

var get = function(key, defaultValue) {

  return _.get(this.currentData, key, defaultValue);
};

module.exports = get;
