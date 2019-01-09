var _ = require('lodash');

var {
  commit,
  set,
  get,
} = require('./lib');


function JMON(data) {
  var type = Object.prototype.toString.call(data);

  var isObject = (
    type === '[object Object]' ||
    type === '[object Array]'
  );

  if (!isObject){
    this.initialData = data;
    this.data = data;
    return;
  }

  this.initialData = data;
  this.data = _.cloneDeep(this.initialData);

  if (isObject){
    var keys = Object.keys(this.data);

    // intialize all the properties
    keys.forEach((key) => {
      this.data[key] = new JMON(this.data[key]);
    });
  };
}

JMON.prototype.isCreated = false;
JMON.prototype.isUpdated = false;
JMON.prototype.isDeleted = false;
JMON.prototype.set = set;
JMON.prototype.get = get;
JMON.prototype.commit = commit;

module.exports = JMON;
