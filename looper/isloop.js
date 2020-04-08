"use strict";

// Input/Output
//  listClass -> true/false

// 1. Push node.value into an array
// 2. If node.value is already in the array, return true
// 3. If node.value === null, return false

const isLoop = (linkedList) => {
  let currentNode = linkedList.head;
  let nodeArr = [];

  while (currentNode !== null) {
    if (nodeArr.includes(currentNode.value)) {
      return true;
    }
    nodeArr.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
