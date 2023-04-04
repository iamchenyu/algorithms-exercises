// implement selection sort in JS
// Start with the array -> find the smallest -> add the smallest el to a new array -> remove it from the old array -> start again (but with a smaller array)

// how to find the smallest in an array? -> start with the 1st element and compare it with the next one -> update smallest variable -> move to the next one
// in this way, we can make sure we compare every element in the array

// selectioin sort: we find the smallest one -> SELECT it out -> continuing finding the smallest one in the rest array -> SELECT -> continue...

// const findSmallest = (arr) => {
//   let smallest = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// };

// const selectionSort = (arr) => {
//   let result = [];
//   const rounds = arr.length;

//   for (let i = 0; i < rounds; i++) {
//     let small = findSmallest(arr);
//     result.push(small);
//     arr.splice(arr.indexOf(small), 1);
//   }
//   return result;
// };

const selectionSort = (arr) => {
  let result = [];
  let rounds = arr.length; // how many times we need to check

  for (let i = 0; i < rounds; i++) {
    // everytime when we check, we need to find the smallest
    let small = arr[0];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < small) {
        small = arr[j];
      }
    }

    // add the smallest to the new array
    result.push(small);

    // remove it from the old array then continue
    arr.splice(arr.indexOf(small), 1);
  }
  return result;
};

// test
console.log(selectionSort([1, 3, 2]));
console.log(selectionSort([5, 1, 1]));
console.log(selectionSort([1, 2, 3, 4]));
console.log(selectionSort([10, 4, 8, 11]));
