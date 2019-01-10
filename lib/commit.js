const _ = require('lodash');

/**
 * This will commit current changes and treat current data as initial data
 * Also clears, createdList, deletedList, updatedList
 */
var commit = function() {

  this.initialData = _.cloneDeep(this.data);
  Object.getPrototypeOf(this).jmon.isCreated = false;
  Object.getPrototypeOf(this).jmon.isUpdated = false;
  Object.getPrototypeOf(this).jmon.isDeleted = false;
};


module.exports = commit;
