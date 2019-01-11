var _ = require('lodash');

var { isObject } = require('./lib');


function JMON(data) {

  if (!isObject(data)){

    // If data provided is not a JSON, The JMON will not be Initialized.
    // This library will not handle data other than a JSON Object.
    console.error(`${data} is not a JSON`);
    return false;
  };

  this.initialData = data;
  this.data = _.cloneDeep(this.initialData);

  Object.keys(this.data).forEach((key) => {
    if (isObject(this.data[key])){

      // For every key that has a object as value
      // Recursion should be applied to initialized the JMON structure.
      this.data[key] = new JMON(this.data[key]);
    };
  });
}


JMON.prototype.isCreated = false;
JMON.prototype.isUpdated = false;
JMON.prototype.isDeleted = false;


/**
 * This will commit current changes and treat current data as initial data
 * Also clears, createdList, deletedList, updatedList
 */
JMON.prototype.commit = function() {

  this.initialData = _.cloneDeep(this.data);
  Object.getPrototypeOf(this).isCreated = false;
  Object.getPrototypeOf(this).isUpdated = false;
  Object.getPrototypeOf(this).isDeleted = false;
};


/**
 * @param {key/path to search in the object} key
 * @param {if key/path is not found then this is used} defaultValue
 * Returns value of input key from the currentData.
 * Or returns defaultValue if key is not found
 */
JMON.prototype.get = function(key) {

  var path = key.split('.');
  var sourceData = this;
  path.map(function(key) {
    sourceData = _.get(sourceData.data, key);
  });

  return sourceData;
};


/**
 * Check whether the key already exists or not.
 * If key does not exists then throw error saying use push function
 * else if value is not object set the value
 * else set the value as new JMON object
 * @param {*} key
 * @param {*} value
 */
JMON.prototype.set = function(key, value) {

  // Updating isUpdated flag.
  Object.getPrototypeOf(this).isUpdated = true;

  // If value is not JSON
  if (!isObject(value)) {
    _.set(this.data, key, value);
    return true;
  }

  // If value is JSON
  _.set(this.data, key, new JMON(value));
  return true;
};


module.exports = JMON;
