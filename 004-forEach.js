Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//Test
const arr = [1, 2, 3, 4, 5];
arr.myForEach((item, idx) => console.log(`Item: ${item} -- Index: ${idx}`));
