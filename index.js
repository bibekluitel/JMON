var _ = require('lodash');

var { isObject, isChildModified } = require('./lib');


function JMON(data) {

  if (!isObject(data)){

    // If data provided is not a JSON, The JMON will not be Initialized.
    // This library will not handle data other than a JSON Object.
    console.error(`${data} is not a JSON`);
    throw new Error('Only JSON and Arrays of JSON are supported');
  }

  this.initialData = data;
  this.data = _.cloneDeep(this.initialData);
  this.isCreated = false;
  this.isUpdated = false;
  this.isDeleted = false;

  Object.keys(this.data).forEach((key) => {
    if (isObject(this.data[key])){

      // For every key that has a object as value
      // Recursion should be applied to initialized the JMON structure.
      this.data[key] = new JMON(this.data[key]);
    };
  });
}

/**
 * This will commit current changes and treat current data as initial data
 * Also clears, createdList, deletedList, updatedList
 */
JMON.prototype.commit = function() {

  this.initialData = _.cloneDeep(this.data);
  this.isCreated = false;
  this.isUpdated = false;
  this.isDeleted = false;
};

/**
 * Returns true if self or any of children has been modified.
 * Returns false if nothing has been changed.
 */
JMON.prototype.isModified = function() {

  return isChildModified(this);
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

  if (!key || !value){

    return false;
  }

  var keyList = key.split('.');

  if (keyList.length === 1){

    // If value is not JSON
    if (!isObject(value)) {

      _.set(this.data, key, value);
      // Updating isUpdated flag.
      this.isUpdated = !this.isCreated;
      return true;
    }

    // If value is JSON
    // we set isCreated flag after we created a new JMON Object
    _.set(this.data, key, new JMON(value));
    _.get(this.data, key).isCreated = true;

    return true;
  }

  // if key is not present in data or value of key is falsy value
  if (!_.get(this.data, _.first(keyList))) {

    // create a new jmon object and assign it to
    _.set(this.data, _.first(keyList), new JMON({}));
    _.get(this.data, _.first(keyList)).isCreated = true;
  }

  return _.get(this.data, _.first(keyList)).set(keyList.slice(1).join('.'), value);
};


module.exports = JMON;
