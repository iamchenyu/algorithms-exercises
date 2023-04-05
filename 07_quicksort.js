const quickSort = (arr) => {
  // base case
  if (arr.length < 2) return arr;

  // recursive case
  let pivot = arr[0];
  //   let smaller = [];
  //   let larger = [];

  //   for (let i = 1; i < arr.length; i++) {
  //     arr[i] >= pivot ? larger.push(arr[i]) : smaller.push(arr[i]);
  //   }

  let smaller = arr.slice(1).filter((el) => el < pivot);
  let larger = arr.slice(1).filter((el) => el >= pivot);

  //   return quickSort(smaller).concat(pivot).concat(quickSort(larger));
  return [...quickSort(smaller), pivot, ...quickSort(larger)];
};

console.log(quickSort([1, 3, 2]));
console.log(quickSort([5, 1, 1]));
console.log(quickSort([1, 2, 3, 4]));
console.log(quickSort([10, 4, 8, 11]));
