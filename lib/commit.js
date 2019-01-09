const _ = require('lodash');

/**
 * This will commit current changes and treat current data as initial data
 * Also clears, createdList, deletedList, updatedList
 */
var commit = function() {

  this.initialData = _.cloneDeep(this.data);

  this.isCreated = false;
  this.isUpdated = false;
  this.isDeleted = false;
};

module.exports = commit;
