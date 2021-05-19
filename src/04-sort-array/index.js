// **NOTE: 
// I believe the syntax for the TypeError 
// test may be incorrect. I have changed 
// it slightly, so please check my implementation 
// in the test suite before continuing.



/*
Average case: O(n log n)
Worst case: O(n^2) 

I used quicksort over other sorting algorithms such 
as merge sort and heap sort although they both also
have average running times of O(n log n).

Reason for this is because quicksort hits the average case
more often than the other two algorithms, and because it
is efficient against smaller arrays - which for the 
given test cases are suitable. 

Quicksort is also an in-place sorting algorithm therfore
it is memory-efficient as well. 
*/



module.exports = function sortArray(input) {
  function quickSort(arr) {
    if (arr.length < 2) {
      return arr;
    } else {
      let pivot = arr[0];
      arr.shift();

      let less = arr.filter(elem => elem <= pivot);
      let more = arr.filter(elem => elem > pivot);

      return [...quickSort(less), pivot, ...quickSort(more)];
    }
  }

  if (!(input instanceof Array) || !(input.every(elem => typeof elem == "number"))) {
    throw new TypeError("error");
  } 

  if (input.length < 1) {
    return [];
  }

  return quickSort(input);
};