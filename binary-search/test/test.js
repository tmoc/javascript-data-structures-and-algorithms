var expect = require('chai').expect;
var mocha = require('mocha');
var rBinarySearch1 = require('../').rBinarySearch1;
var rBinarySearch2 = require('../').rBinarySearch2;
var iBinarySearch = require('../').iBinarySearch;

describe('rBinarySearch1', function () {

  it('should return the correct index for existant item', function () {
    var items = [1, 3, 5, 8, 9, 200];
    var items2 = [2];

    expect(rBinarySearch1(items, 3)).to.equal(1);
    expect(rBinarySearch1(items, 1)).to.equal(0);
    expect(rBinarySearch1(items, 200)).to.equal(5);
    expect(rBinarySearch1(items2, 2)).to.equal(0);
  });

  it('should return -1 for a non-existant item', function () {
    var items = [1, 3, 5, 8, 9, 200];

    expect(rBinarySearch1(items, 6)).to.equal(-1);
  });

});

describe('rBinarySearch2', function () {

  it('should find correct index for existant item', function () {
    var items = [1, 3, 5, 8, 9, 200];
    var items2 = [2];

    expect(rBinarySearch2(items, 3)).to.equal(1);
    expect(rBinarySearch2(items, 1)).to.equal(0);
    expect(rBinarySearch2(items, 200)).to.equal(5);
    expect(rBinarySearch2(items2, 2)).to.equal(0);
  });

  it('should return -1 for a non-existant item', function () {
    var items = [1, 3, 5, 8, 9, 200];

    expect(rBinarySearch2(items, 6)).to.equal(-1);
  });

});

describe('iBinarySearch', function () {

  it('should find correct index for existant item', function () {
    var items = [1, 3, 5, 8, 9, 200];
    var items2 = [2];

    expect(iBinarySearch(items, 3)).to.equal(1);
    expect(iBinarySearch(items, 1)).to.equal(0);
    expect(iBinarySearch(items, 200)).to.equal(5);
    expect(iBinarySearch(items2, 2)).to.equal(0);
  });

  it('should return -1 for a non-existant item', function () {
    var items = [1, 3, 5, 8, 9, 200];

    expect(iBinarySearch(items, 6)).to.equal(-1);
  });

});