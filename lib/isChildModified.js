function isChildModified(obj) {

  if (!obj || !obj.data){
    return false;
  }

  if (obj.isUpdated || obj.isCreated){

    return true;
  };

  var keys = Object.keys(obj.data);

  for (var i = 0; i < keys.length; i++) {

    var key = keys[i];

    if (isChildModified(obj.data[key])){

      return true;
    };
  }

  return false;
}

module.exports = isChildModified;
