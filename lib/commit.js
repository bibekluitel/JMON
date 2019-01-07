const _ = require('lodash');

/**
 * This will commit current changes and treat current data as initial data
 * Also clears, createdList, deletedList, updatedList
 */
var commit = function() {

  this.initialData = _.cloneDeep(this.data);

  // Clearing the created, updated, deleted lists
  this.createdList = [];
  this.updatedList = [];
  this.deleteList = [];
};

module.exports = commit;
