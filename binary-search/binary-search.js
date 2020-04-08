/* eslint-disable no-lonely-if */
'use strict';

// Input/Output
// ([1, 2, 3, 4, 5], 4) -> true
// ([1, 2, 3], 6) -> false

// Look at middle of the array, see if number is greater/less than
// Only work with that half of the array
// Repeat

// 1. Get middle
// 2. Compare target to middle
// 3. If target is greater, only keep right half of array and vice-versa
// 4. Repeat until target is found or array.length === 1

const binarySearch = (array, target) => {
  if (array.length === 1 && array[0] !== target) {
    return false;
  }

  let middle = Math.floor(array.length / 2);

  if (target === array[middle]) {
    return true;
  } else {
    if (target > array[middle]) {
      array = array.slice(middle);
    } else {
      array = array.slice(0, middle);
    }
  }

  return binarySearch(array, target);
};

/*

Solution:
1) use pointers (left and right)
2) Get middle value
3) if target < array[middle] then set right pointer to middle - 1 (effectively removing the right side of the array)


const binarySearch = (array, target, left = 0, right = array.length) => {
  let toCheck = Math.floor((left + right) / 2);
  if (right < left) {
    return false;
  }
  if (array[toCheck] === target) {
    return true;
  } else if (array[toCheck] > target) {
    right = toCheck - 1;
    return binarySearch(array, target, left, right);
  } else {
    left = toCheck + 1;
    return binarySearch(array, target, left, right);
  }
};

*/

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?
*/

module.exports = binarySearch;
