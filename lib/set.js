var _ = require('lodash');

var isObject = require('./isObject');
var jmon = require('../index');


/**
 * Check whether the key already exists or not.
 * If key does not exists then throw error saying use push function
 * else if value is not object set the value
 * else set the value as new JMON object
 * @param {*} key
 * @param {*} value
 */
var set = function(key, value) {

  // Checking if {key} exists in data
  if (_.get(this.data, key)) {

    // Updating isUpdated flag.
    Object.getPrototypeOf(this).isUpdated = true;

    // If value is not JSON
    if (!isObject(value)) {
      _.set(this.data, key, value);
      return true;
    }

    // If value is JSON
    _.set(this.data, key, new jmon.JMON(value));
    return true;

  } else {
    console.error(`${key} does not exists in data. Add new value using "push"`);
    return false;
  }
};

module.exports = set;
