var _ = require('lodash');

var set = function(key, value) {

  if (_.get(this.data, key)) {

    if (value)
    _.set(this.data, key, value);
    return true;
  } else {
    console.error(`${key} does not exists in data. Add new value using "push"`);
    return false;
  }
};

module.exports = set;
