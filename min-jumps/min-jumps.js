'use strict';

// input: array: [1, 1, 2, 3, 4, 1, 2, 1]
// output: number of jumps to end (or passed end) --> 4

// check if it only needs 1 jump from arr[0]
// find the length of the array
// check if number you are on/passing is greater than your countdown

// hueristic: we know that its advantageous to have big early numbers

// only rule: if at any time, the current number can go to (or passed) the end of the array, then no more stopping

// Complete this algo
const minJumps = (arr) => {
  const length = arr.length - 1;

  let jumps = 1;
  let current = arr[0];

  if (current >= length) {
    return jumps;
  } else {
    let min = length;
    for (let i = current - 1; i > 0; i--) {
      let numJumps = minJumps(arr.slice(current - i));
      if (numJumps < min) {
        min = numJumps;
      }
    }
    jumps += min;
    return jumps;
  }
};

module.exports = minJumps;
