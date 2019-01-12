function checkIfDirty(obj) {

  if (!obj && !obj.data){
    return false;
  }

  if (obj.isUpdated || obj.isCreated){

    return true;
  };

  var isChildDirty = false;

  Object.keys(obj.data).forEach((key) => {

    if (checkIfDirty(obj.data[key])){
      isChildDirty = true;
    };
  });

  return isChildDirty;
}

module.exports = checkIfDirty;
