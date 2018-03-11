Array.prototype.filter = function(cb) {
  const newValues = [];

  this.forEach(item => {
    if(cb(item)) {
      newValues.push(item);
    }
  });

  return newValues;
}

console.log([1, 2, 3, 4, 5, 6].filter(number => number > 3));
