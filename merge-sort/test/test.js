var expect = require('chai').expect;
var mocha = require('mocha');
var rMergeSort = require('../').rMergeSort;
var iMergeSort = require('../').iMergeSort;

describe('rMergeSort', function () {
  it('should sort items', function () {
    var items = [4, 19, 23, 2, 2, 59];
    expect(rMergeSort(items)).to.eql([2, 2, 4, 19, 23, 59]);
  });

});

// describe('iMergeSort', function () {
//   it('should sort items', function () {
//     var items = [4, 19, 23, 2, 2, 59];
//     expect(iMergeSort(items)).to.eql([2, 2, 4, 19, 23, 59]);
//   });

// });
