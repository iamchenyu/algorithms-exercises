// implement binary search in recursive way

const recursiveBinarySearch = (arr, el, low = 0, high = arr.length - 1) => {
  if (low > high) return null;

  let middle = Math.floor((low + high) / 2);

  if (arr[middle] === el) return middle;

  if (arr[middle] > el) {
    return recursiveBinarySearch(arr, el, (low = 0), (high = middle - 1));
  } else {
    return recursiveBinarySearch(arr, el, (low = middle + 1), high);
  }
};

// test

console.log(recursiveBinarySearch([1, 2, 3], 1));
console.log(recursiveBinarySearch([1, 2, 3], 2));
console.log(recursiveBinarySearch([1, 2, 3], 3));
console.log(recursiveBinarySearch([1, 2, 3], 4));

// note:
// don't forget "RETURN" the recursive function!!!
