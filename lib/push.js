var _ = require('lodash');

/**
 * @param {new data (key:value) to add in the object} data
 * This will add the new value in the object
 * It will not replace the existing values, if keys are already available then return error.
 */
var push = function(data) {

  for (let key in data) {
    if (_.get(this.data, key)) {
      console.error(`${key} already exists!!! Try updating the value`);
      return false;
    }
  }

  this.data = Object.assign(this.data, data);
  this.isCreated = true;
  return true;
};

module.exports = push;
