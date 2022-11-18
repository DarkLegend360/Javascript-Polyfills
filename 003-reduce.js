Array.prototype.myReduce = function (callback, initialState) {
  let result = initialState;
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

//Test
const arr = [1, 2, 3, 4, 5];
console.log(arr.myReduce((acc, item) => acc + item, 0));
console.log(arr.myReduce((acc, item) => acc + item * 2, 0));
