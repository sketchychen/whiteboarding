function assertEquals(testResult, expectedResult) {
  if (testResult === expectedResult) {
    return "Test passed.";
  } else {
    return "Test failed.";
  }
}

// Triple Step:
// A child is running up a staircase with n steps and can hop either 1 step,
// 2 steps, or 3 steps at a time. Implement a method to count how many
// possible ways the child can run up the stairs.
function tripleStep(n) {
  if (n === 0) { return 1; }
  if (n < 0) { return 0; }

  return tripleStep(n-1) + tripleStep(n-2) + tripleStep(n-3);
}

console.log("tripleStep Test 1: ", assertEquals(tripleStep(2), 2));
console.log("tripleStep Test 2: ", assertEquals(tripleStep(3), 4));
console.log("tripleStep Test 3: ", assertEquals(tripleStep(4), 7));

// Robot in a Grid:
// Imagine a robot sitting on the upper left corner of a grid with r rows and
// c columns. The robot can only move in two directions, right and down, but
// certain cells are "off limits" such that the robot cannot step on them.
// Design an algorithm to find a path for the robot from the top left to the
// bottom right.
function robotInAGrid(grid) {
  // assuming grid is an array of length r containing arrays of length c


}

// Magic Index:
// A magic index in an array A[0 ... n-1] is defined to be an index such that
// A[i] = i. Given a sorted array of distinct integers, write a method to find
// a magic index, if one exists, in array A.
// FOLLOW UP: What if the values are not distinct?


// Power Set:
// Write a method to return all subsets of a set.

// Recursive Multiply:
// Write a recursive function to multiply two positive integers without using
// the * operator. You can use addition, subtraction, and bit shifting, but
// you should minimize the number of those operations.


// Towers of Hanoi:
// In the classic problem of the Towers of Hanoi, you have 3 towers and N disks
// of different sizes which can slide onto any tower. The puzzle starts with
// disks sorted in ascending order of size from top to bottom. (1 11 111 111, etc.)
// Write a program to move the disks from the first tower to the last using stacks.
// You have the following constraints:
// 1) Only one disk can be moved at a time.
// 2) A disk is slid off the top of one tower onto another tower.
// 3) A disk cannot be placed on top of a smaller disk (no 111 11 1)


// Permutations Without Dups:
// Write a method to compute all permutations of a string of unique characters.


// Permutations with Dups:
// Write a method to compute all permutations of a string whose characters are
// not necesarily unique. The list of permutations should not have duplicates.
