/*
Average case: O(n)
Worst case: O(n)

n = length of input
m = number of words in sentence
k = length of each word

Breaking the code down we have:
  - .split(" ")
  Passes through the entire string and stores each word in an
  array. Linear complexity O(n) since it iterates over input.

  - .map(elem => {.split("").reverse().join("")})
  On each word (elem) in the array a new array is made up of each letter
  of the word. Each sub array is reversed and letters joined. Linear 
  complexity: O(m) + O(k) + O(k)  

  - .join(" ")
  Runs through whole array of reverse words and joins into single string.
  It iterates over array of words, therefore linear complexity O(m).

  We have in total: 
  O(2k) <= O(2m) <= O(2n)
  
  The length of each word and number of words in sentence 
  are always less than the length of input. 

  Therefore O(2n) or O(n) as constants are ignored.
 */



module.exports = function reverseWordsInSentence(input) {
  const res = input.split(" ").map(elem => {
    return elem.split("").reverse().join("");    
  });
  return res.join(" ");
};

