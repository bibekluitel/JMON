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

  if (!isObject) return;

  this.initialData = data;
  this.data = _.cloneDeep(this.initialData);

  this.isCreated = false;
  this.isUpdated = false;
  this.isDeleted = false;

  if (isObject){
    var keys = Object.keys(this.data);
    // intialize all the properties
    this.set = set;
    this.get = get;
    this.commit = commit;

    keys.forEach((key) => {
      this.data[key] = new JMON(this.data[key]);
    });
  };
}

module.exports = JMON;
