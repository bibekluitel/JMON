var {
  set,
  stringify,
} = require('./lib');


function JMON(data) {

  this.initialData = data;
  this.data = JSON.parse(JSON.stringify(data));
}

// Replaces the current data with input data
JMON.prototype.set = set;

// Stringifies the data and returns
JMON.prototype.stringify = stringify;


module.exports = JMON;
