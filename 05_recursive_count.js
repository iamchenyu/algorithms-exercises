const recursiveCount = (arr) =>
  arr.length === 1 ? 1 : 1 + recursiveCount(arr.slice(1));

console.log(recursiveCount([1, 3]));
console.log(recursiveCount([5, 1, 1]));
console.log(recursiveCount([1, 2, 3, 4]));
console.log(recursiveCount([10, 4, 8, 11, 33]));
