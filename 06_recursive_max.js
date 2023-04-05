// const recursiveMax = (arr) => {
//   if (arr.length === 1) {
//     return arr[0];
//   } else {
//     return arr[0] >= recursiveMax(arr.slice(1))
//       ? arr[0]
//       : recursiveMax(arr.slice(1));
//   }
// };

const recursiveMax = (arr) =>
  arr.length === 1
    ? arr[0]
    : arr[0] >= recursiveMax(arr.slice(1))
    ? arr[0]
    : recursiveMax(arr.slice(1));

console.log(recursiveMax([1, 3]));
console.log(recursiveMax([5, 1, 1]));
console.log(recursiveMax([1, 2, 3, 4]));
console.log(recursiveMax([10, 4, 8, 11, 33]));
