// Merges sorted arrays.
var merge = function (a, b) {
  var iA = 0;
  var iB = 0;
  var results = [];

  while (iA < a.length && iB < b.length) {
    if (a[iA] < b[iB]) {
      results.push(a[iA]);
      iA++;
    } else {
      results.push(b[iB]);
      iB++;
    }
  }

  return results.concat(a.slice(iA)).concat(b.slice(iB));
};

var rMergeSort = function (items) {
  var middle;
  var left;
  var right;

  if (items.length < 2) {
    return items;
  }

  middle = Math.floor(items.length / 2);
  left = items.slice(0, middle);
  right = items.slice(middle);

  return merge(rMergeSort(left), rMergeSort(right));
};

var iMergeSort = function (items) {
  var sorted = [];
  var i;
  var j;
  var k;

  for (i = 0; i < items.length; i++) {
    sorted.push([items[i]]);
  }

  sorted.push([]);

  while (sorted.length > 1) {

    for (var j = 0, k = 0; k < sorted.length; j++, k += 2) {
      sorted[j] = merge(sorted[k], sorted[k + 1]);
    }
  }  

  return sorted;
};

exports.rMergeSort = rMergeSort;
exports.iMergeSort = iMergeSort;