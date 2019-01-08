var _ = require('lodash');

var set = function(path, data) {

  //  if created or not
  if (_.get(this.data, path)){
    _.set(this.data, path, data);
  } else {
    _.set(this.data, path, data);
  }
};

module.exports = set;
