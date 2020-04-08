'use strict';

// input: array: [1, 1, 2, 3, 4, 1, 2, 1]
// output: number of jumps to end (or passed end) --> 4

/*

1) iterate through the array. i is going to act as your pointer for where you jump to
2) for each jump (starting at arr[0]) look at an array of your options 3) Get the max value of that array of options, set your pointer to that index, and iterate jump by 1
4) (if multiple of the same max number, value the last one highest)

*/

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
