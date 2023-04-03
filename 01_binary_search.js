// implement binary search in JS

const binarySearch = (arr, el) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (arr[middle] < el) {
      low = middle + 1;
    } else if (arr[middle] > el) {
      high = middle - 1;
    } else {
      return middle;
    }
  }

  return null;
};

// test

console.log(binarySearch([1, 2, 3], 1));
console.log(binarySearch([1, 2, 3], 2));
console.log(binarySearch([1, 2, 3], 3));
console.log(binarySearch([1, 2, 3], 4));
