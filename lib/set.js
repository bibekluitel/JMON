var _ = require('lodash');

var set = function(path, data) {
  if (!data){
    // Update delete  path
  }
  //  if created or not
  if (_.get(this.currentData, path)){
    _.set(this.currentData, path, data);
  } else {
    _.set(this.currentData, path, data);
  }
};

module.exports = set;
