var rBinarySearch1 = function (items, value, left, right) {
  var middle;

  if (left === undefined) {
    left = 0;
  }
  if (right === undefined) {
    right = items.length;
  }
  if (left === right) {
    return -1;
  }

  middle = Math.floor((left + right) / 2); 

  if (items[middle] === value) {
    return middle;
  } else if (items[middle] > value) {

    return rBinarySearch1(items, value, left, middle); 
  } else {
    return rBinarySearch1(items, value, middle + 1, right);
  }
};

var rBinarySearch2 = function (items, value) {
  var left = 0;
  var right = items.length;
  var middle;

  var recurse = function () {
    if (left === right) {
      return -1;
    }

    middle = Math.floor((left + right) / 2);

    if (items[middle] === value) {
      return middle;
    } else if (items[middle] > value) {
      right = middle;
      return recurse(); 
    } else {
      left = middle + 1;
      return recurse();
    }
  };

  return recurse();
};

var iBinarySearch = function (items, value) {
  var left = 0;
  var right = items.length;
  var middle;

  while (left < right) {
    middle = Math.floor((left + right) / 2);

    if (items[middle] === value) {
      return middle;
    } else if (items[middle] > value) {
      right = middle; 
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

exports.rBinarySearch1 = rBinarySearch1;
exports.rBinarySearch2 = rBinarySearch2;
exports.iBinarySearch = iBinarySearch;