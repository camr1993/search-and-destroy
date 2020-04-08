'use strict';

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

Solution:

1) Make two pointers. One at the head, one at head.next
2) first node is going to mode one node at a time, second is going to move two nodes at a time
3) if either is ever null, that means there is a tail (and thus no loop), so return false
4) If they ever equal each other, that means that they have gone in a circle at some point. So exit the while loops and return true

const isLoop = (linkedlist) => {
  let firstNode = linkedlist.head;
  let secondNode = firstNode.next;
  while (firstNode !== secondNode) {
    if (firstNode === null || secondNode === null) {
      return false;
    }
    firstNode = firstNode.next;
    secondNode = secondNode.next.next;
  }
  return true;
};

EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!


/*

module.exports = isLoop;
