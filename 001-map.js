Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

//Test

const arr = [1, 2, 3, 4, 5];
console.log(arr.myMap((item) => item * 1));
console.log(arr.myMap((item) => item * 2));
console.log(arr.myMap((item) => item * 3));
console.log(arr.myMap((item) => item * 5));
console.log(arr.myMap((item) => item * 10));
