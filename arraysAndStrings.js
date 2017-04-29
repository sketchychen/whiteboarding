function assertEquals(testResult, expectedResult) {
  if (testResult === expectedResult) {
    return "Test passed.";
  } else {
    return "Test failed.";
  }
}

// Is Unique:
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?
function isUnique(str) {
  var counts = {};

  str.split("").forEach(function(char) {
    if (counts.hasOwnProperty(char)) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  });

  for (var key in counts) {
    if (counts[key] > 1) {
      return false;
    }
  }

  return true;
}

console.log("isUnique Test 1: ", assertEquals(isUnique('a;sdklfj'), true));
console.log("isUnique Test 2: ", assertEquals(isUnique('asdf;lkja'), false));

// Check Permutation:
// Given two strings, write a method to decide if one is a permutation of the other.
function countChars(str) {
  var counts = {};
  str.split("").forEach(function(char) {
    if (counts.hasOwnProperty(char)) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  });
  return counts;
}

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) { return false; }

  var counts1 = countChars(str1);
  var counts2 = countChars(str2);

  for (var key in counts1) {
    if (!counts2.hasOwnProperty(key)) { return false; }
    else if (counts1[key] !== counts2[key]) { return false; }
  }

  return true;
}

console.log("checkPermutation Test 1: ", assertEquals(checkPermutation('a;sdklfj', 'jkl;asdf'), true));
console.log("checkPermutation Test 2: ", assertEquals(checkPermutation('asdf;lkja', 'a;sdkfajd'), false));

// URLify:
// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.
// (Note: If implementing in Java, please use a character array so that you can perform this operation in place.
function URLify(str) {
  return str.trim().replace(/\s+/g, "%20");
}
console.log("URLify Test 1: ", assertEquals(URLify(' asdf fdsa df   '), 'asdf%20fdsa%20df'));
