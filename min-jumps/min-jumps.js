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
  let jumps = 0;
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];

    if (curNum + i >= arr.length - 1) {
      jumps++;
      break;
    }

    let optionsArr = arr.slice(i + 1, curNum + i + 1);
    let max = Math.max(...optionsArr);
    // index of options array:
    let maxIndex = optionsArr.lastIndexOf(max);
    // index of full array:
    let arrIndex = maxIndex + i + 1;

    jumps++;
    i = arrIndex - 1; // -1 because for loop will iterate once for us
  }
  return jumps;
};

module.exports = minJumps;
