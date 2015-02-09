var expect = require('chai').expect;
var mocha = require('mocha');
var HashTable = require('../');

describe('HashTable', function () {

  it('should store items', function () {
    var hashTable = new HashTable();

    hashTable.insert('k', 'v');
    expect(hashTable.retrieve('k')).to.equal('v');
    expect(hashTable.load).to.equal(1);

    hashTable.insert('k2', 'v2');
    expect(hashTable.retrieve('k2')).to.equal('v2');
    expect(hashTable.load).to.equal(2);
  });

  it('should remove items', function () {
    var hashTable = new HashTable();
    
    hashTable.insert('k', 'v');
    hashTable.insert('k2', 'v2');

    hashTable.remove('k');
    expect(hashTable.retrieve('k')).to.be.undefined();
    expect(hashTable.load).to.equal(1);

    hashTable.remove('k2');
    expect(hashTable.retrieve('k2')).to.be.undefined();
    expect(hashTable.load).to.equal(0);
  });

  it('should double in size when load reaches over 2/3 of limit', function () {
    var hashTable = new HashTable();

    hashTable.insert('k', 'v');
    hashTable.insert('k2', 'v2');
    hashTable.insert('k3', 'v3');
    hashTable.insert('k4', 'v4');
    hashTable.insert('k5', 'v5');
    hashTable.insert('k6', 'v6');

    expect(hashTable.limit).to.equal(10);

    hashTable.insert('k7', 'v7');

    expect(hashTable.limit).to.equal(20);

  });

  it('should halve in size when load reaches below 1/3 of limit', function () {
    var hashTable = new HashTable();
    hashTable.insert('k', 'v');
    hashTable.insert('k2', 'v2');
    hashTable.insert('k3', 'v3');

    expect(hashTable.limit).to.equal(10);

    hashTable.remove('k');

    expect(hashTable.limit).to.equal(5);

    hashTable.remove('k2');

    expect(hashTable.limit).to.equal(2);

    hashTable.remove('k3');

    expect(hashTable.limit).to.equal(1);

    hashTable.insert('k4', 'v4');
    hashTable.remove('k4');

    expect(hashTable.limit).to.equal(1);

    hashTable.insert('k5', 'v5');

    expect(hashTable.limit).to.equal(2);
  });
});