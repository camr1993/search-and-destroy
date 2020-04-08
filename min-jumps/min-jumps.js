'use strict';

// input: array: [1, 1, 2, 3, 4, 1, 2, 1]
// output: number of jumps to end (or passed end) --> 4

// iterate through the array. i is going to act as your pointer
// for each jump (starting at arr[0]) look at an array of your options. Get the max value, set your pointer to that index, and increase jump by 1
// if 2 of the same max number, value the 2nd one higher

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
