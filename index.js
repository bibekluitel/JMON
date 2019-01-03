const { set, get } = require('./lib')

function JMON(data) {
  this.data  =  data
}

JMON.prototype.set = set;

JMON.prototype.get = get

JMON.prototype.print = function() {
  console.log(this)
}

module.exports = JMON