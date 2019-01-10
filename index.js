var _ = require('lodash');

var {
  commit,
  set,
  get,
  isObject,

} = require('./lib');


function JMON(data) {

  if (!isObject(data)){

    // If data provided is not a JSON, The JMON will not be Initialized.
    // This library will not handle data other than a JSON Object.
    console.error('Data provided is not a JSON');
    return;
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
JMON.prototype.set = set;
JMON.prototype.get = get;
JMON.prototype.commit = commit;

module.exports = JMON;
