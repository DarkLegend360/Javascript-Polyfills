Array.prototype.mySlice = function (start, end) {
  if (!start && !end) {
    return this;
  }
  if (!end) {
    end = this.length;
  }
  if (start < 0) {
    start = this.length + start;
  }
  if (end < 0) {
    end = this.length + end;
  }
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(this[i]);
  }
  return result;
};

//Test

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.mySlice(2, arr.length - 1));
