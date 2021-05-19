/*
Average case: O(1)
Worst case: O(1)

'createBase' is a higher order function that returns 
a function called 'base'. 

'createBase' takes a parameter integer which determines 
the arithmetic expression used in the returned 'base' 
function — if a negative number is given, substration; 
if a positive number is given, addition. 

Because only substraction or addition are possible operations,
as inputs can only be integers, the function will always be constant time.
*/



module.exports = function createBase(integer) {
  let int = integer;
  const base = num => int + num;
  return base;
};
