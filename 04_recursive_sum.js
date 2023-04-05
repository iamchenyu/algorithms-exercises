// const recursiveSum = (arr) => {
//   let ttl = 0;
//   // base case
//   if (arr.length === 1) {
//     return arr[0];
//   } else {
//     // recursive case
//     let el = arr.shift();
//     ttl = el + recursiveSum(arr);
//   }
//   return ttl;
// };

const recursiveSum = (arr) =>
  arr.length === 1 ? arr[0] : arr[0] + recursiveSum(arr.slice(1));

console.log(recursiveSum([1, 3, 2]));
console.log(recursiveSum([5, 1, 1]));
console.log(recursiveSum([1, 2, 3, 4]));
console.log(recursiveSum([10, 4, 8, 11]));
