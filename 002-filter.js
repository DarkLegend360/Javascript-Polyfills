Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

//Test
const arr = [1, 3, 5, 7, 9, 20, 30, 50];
console.log(arr.myFilter((item) => item == 5));
console.log(arr.myFilter((item) => item < 5));
console.log(arr.myFilter((item) => item > 30));
console.log(arr.myFilter(() => true));
console.log(arr.myFilter(() => false));
