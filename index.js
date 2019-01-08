var _ = require('lodash');

var {
  commit,
  set,
  stringify,
} = require('./lib');


function JMON(data) {

  this.initialData = data;
  this.data = _.cloneDeep(data);

  // Containers
  this.createdList = [];
  this.updatedList = [];
  this.deleteList = [];
}

// Replaces the current data with input data
JMON.prototype.set = set;

// Stringifies the data and returns
JMON.prototype.stringify = stringify;

// Commits the current changes
JMON.prototype.commit = commit;


module.exports = JMON;
