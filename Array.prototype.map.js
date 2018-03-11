Array.prototype.map = function(projectionFunction) {
  var results = [];

  this.forEach(function() {
    results.push(projectionFunction(itemInArray));
  });

  return result;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'
