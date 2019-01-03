function JMON(data) {
  this.data  =  data
}

JMON.prototype.print = function() {
  console.log(this.data)
}

module.exports = {
  JMON
}