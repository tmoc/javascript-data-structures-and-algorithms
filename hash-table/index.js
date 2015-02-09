var HashTable = function () {
  this.limit = 10;
  this.storage = [];
  this.load = 0;
};

HashTable.prototype.insert = function (key, value) {
  var idx = this.getIndex(key);
  var bucket = this.storage[idx];

  if (!bucket) {
    bucket = [];
    this.storage[idx] = bucket;
  }

  bucket.push([key, value]);
  this.load++;
  
  if (this.load > (this.limit / 3) * 2) {
    this.limit *= 2;
    this.resize();
  }
};

HashTable.prototype.retrieve = function (key) {
  var idx = this.getIndex(key);
  var bucket = this.storage[idx];
  var i;

  if (!bucket) {
    return;
  }
  for (i = 0; i < bucket.length; i++) {
    if (bucket[i] && bucket[i][0] === key) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function (key) {
  var idx = this.getIndex(key);
  var bucket = this.storage[idx];
  var i;
  
  if (!bucket) {
    return;
  }

  for (i = 0; i < bucket.length; i++) {
    if (bucket[i] && bucket[i][0] === key) {
      bucket[i] = null;
      this.load--;
      if (this.load < this.limit / 3) {
        this.limit = Math.floor(this.limit / 2);
        this.resize();
      }
      return;
    }
  }
};

HashTable.prototype.getIndex = function (string) {
  var hash;

  var hashWithdjb2 = function (string) {
    string = string.split('').map(function (charString) {
      return charString.charCodeAt(0);
    });

    return string.reduce(function (prev, curr) {
      return ((prev << 5) + prev) + curr;
    }, 5381);
  };

  hash = hashWithdjb2(string);

  return hash % this.limit; 
};

HashTable.prototype.resize = function () {
  var temp = this.storage;
  var bucket;
  var i;
  var j;

  // Reset storage and load for resize.
  this.storage = [];
  this.load = 0;
  
  for (i = 0; i < temp.length; i++) {
    if (Array.isArray(temp[i])) {
      bucket = temp[i];
      for (j = 0; j < bucket.length; j++) {
        if (Array.isArray(bucket[j])) {
          // Inserting key-value pairs with new limit value.
          this.insert(bucket[j][0], bucket[j][1]);
        }
      }
    }
  }

};

module.exports = HashTable;