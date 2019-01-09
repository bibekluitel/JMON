var _ = require('lodash');

var {
  commit,
  set,
  get,
} = require('./lib');

function isObject(data) {

  var type = Object.prototype.toString.call(data);

  return (
    type === '[object Object]' ||
    type === '[object Array]'
  );
}

function JMON(data) {

  if (!isObject(data)){
    console.error('Data provided is not a JSON');
    return;
  };

  this.initialData = data;
  this.data = _.cloneDeep(this.initialData);

  if (isObject){
    var keys = Object.keys(this.data);

    // intialize all the properties
    keys.forEach((key) => {
      if (isObject(this.data[key])){

        this.data[key] = new JMON(this.data[key]);
      };
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
