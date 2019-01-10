function isObject(data) {

  var type = Object.prototype.toString.call(data);

  return (
    type === '[object Object]' ||
    type === '[object Array]'
  );
}

module.exports = isObject;
