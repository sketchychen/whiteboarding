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
  if (str1.length !== str2.length) {
    return false;
  }

  var counts1 = countChars(str1);
  var counts2 = countChars(str2);

  for (var key in counts1) {
    if (!counts2.hasOwnProperty(key)) {
      return false;
    } else if (counts1[key] !== counts2[key]) {
      return false;
    }
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

// Palindrome Permutation:
// Given a string, write a function to check if it is a permutation of a palindrome.
// The palindrome does not need to be limited to just dictionary words.
function palindromePermutation(str) {
  var str_chars = str.toLowerCase().replace(/\s+/g, "");
  var counts = countChars(str_chars);
  var odd_counts = 0;
  for (var key in counts) {
    if (counts[key] % 2 !== 0) {
      odd_counts++;
    }
  }

  if (odd_counts > 1) {
    return false;
  } else {
    return true;
  }

}

console.log("palindromePermutation Test 1: ", assertEquals(palindromePermutation("Tact coa"), true));
console.log("palindromePermutation Test 2: ", assertEquals(palindromePermutation("Tact   coa"), true));
console.log("palindromePermutation Test 3: ", assertEquals(palindromePermutation("Tactt coa"), false));
console.log("palindromePermutation Test 4: ", assertEquals(palindromePermutation("Tactt dddcoa"), false));


// One Away:
// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function
// to check if they are one edit (or zero edits) away.
function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  var longer = str1.length > str2.length ? str1 : str2,
      shorter = str1.length > str2.length ? str2 : str1;

  var indS = 0, // increment through the shorter str
      ctr = 0; // number of "edits" needed

  for (var i = 0; i < longer.length; i++) {
    if (str1.length !== str2.length) { // unequal lengths -- ex: "pale" vs. "ple"
      longer[i] === shorter[indS] ? indS++ : ctr++;
    } else {
      if (longer[i] !== shorter[i]) { // equal lengths -- ex: "pale" vs. "bale" or "pale" vs. "bake"
        ctr++;
      }
    }

  }

  return ctr > 1 ? false : true;
}

console.log("oneAway Test 1: ", assertEquals(oneAway("pale", "ple"), true));
console.log("oneAway Test 2: ", assertEquals(oneAway("pales", "pale"), true));
console.log("oneAway Test 3: ", assertEquals(oneAway("pale", "bale"), true));
console.log("oneAway Test 4: ", assertEquals(oneAway("pale", "bake"), false));


// String Compression:
// Implement a method to perform basic string compression using the counts of repeated characters.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string. You can assume the string has
// only uppercase and lowercase letters (a-z).


function stringCompression(str) {
  var result = "";
  var check = str[0];
  var count = 1;

  // for (var i=1; i<str.length; i++) {
  //   if (str[i] !== check) {
  //     result += check + count;
  //     if (str.length < result.length) {
  //       return str;
  //     }
  //     check = str[i];
  //     count = 1;
  //   } else {
  //     count++;
  //   }
  // }
  //
  // result += check + count;

  for (var i=0; i<str.length; i++) {
    if (str[i+1] !== check) {
      result += check + count;
      if (str.length < result.length) {
        return str;
      }
      check = str[i+1];
      count = 1;
    } else {
      count++;
    }
  }

  // result += check + count;
  return result;
}

console.log("stringCompression Test 1: ", assertEquals(stringCompression("aaaaaaabbcccdaa"), "a7b2c3d1a2"));
console.log("stringCompression Test 2: ", assertEquals(stringCompression("abce"), "abce"));

// Rotate Matrix:
// Given an image represented by NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. Can you do this in place?
function isSquare(M) {
  M.forEach(function(row) {
    if (row.length !== M.length) {
      return false;
    }
  });
  return true;
}

function rotateMatrix(M) {
  if (M.length < 2) { return M; }
  if (!isSquare(M)) { return false; }

  var N = M.length - 1;
  var temp1,
      temp2;

  // iterate through rows
  for (var i = 0; i < Math.floor(M.length/2); i++) {
    // iterate through cols
    for (var j = i; j < N-i; j++) {
      // in counter clockwise (+90 degrees) order:
      // point 0: M[i][j]
      // point 1: M[N-j][i]
      // point 2: M[N-i][N-j]
      // point 3: M[j][N-i]

      // points 3 => 0 => 1 => 2 => 3

      temp1 = M[i][j];
      M[i][j] = M[j][N-i]; // point 3 -> 0

      temp2 = M[N-j][i];
      M[N-j][i] = temp1; // point 0 -> 1

      temp1 = M[N-i][N-j];
      M[N-i][N-j] = temp2; // point 1 -> 2

      temp2 = M[i][N-j];
      M[j][N-i] = temp1; // point 2 -> 3

    }
  }

  M.forEach(function(row){ console.log(row) });
  return M;
}

var M2 = [
  ["m00", "m01"],
  ["m10", "m11"]
];
var M3 = [
  ["m00", "m01", "m02"],
  ["m10", "m11", "m12"],
  ["m20", "m21", "m22"]
];
var M4 = [
  ["m00", "m01", "m02", "m03"],
  ["m10", "m11", "m12", "m13"],
  ["m20", "m21", "m22", "m23"],
  ["m30", "m31", "m32", "m33"]
];
var M5 = [
  ["m00", "m01", "m02", "m03", "m04"],
  ["m10", "m11", "m12", "m13", "m14"],
  ["m20", "m21", "m22", "m23", "m24"],
  ["m30", "m31", "m32", "m33", "m34"],
  ["m40", "m41", "m42", "m43", "m44"]
];
rotateMatrix(M2);
rotateMatrix(M3);
rotateMatrix(M4);
rotateMatrix(M5);

// Zero Matrix:
// Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column are set to 0.
function zeroMatrix(M) {
  for (var i = 0; i < M.length; i++) { // iterate through list of rows
    for (var j = 0; j < M[i].length; j++) { // iterate values in each row
      if (M[i][j] === 0) {
        for (var k = 0; k < M.length; k++) { // iterate through list of rows
          if (M[k][j] !== 0) {
            M[k][j] = "zero me";
          }
        }
        for (var l = 0; l < M[i].length; l++) { // iterate values in each row
          if (M[i][l] !== 0) {
            M[i][l] = "zero me";
          }
        }
      }
    }
  }

  for (var i = 0; i < M.length; i++) {
    for (var j = 0; j < M[i].length; j++) {
      if (M[i][j] === "zero me") {
        M[i][j] = 0;
      }
    }
  }

  M.forEach(function(row){ console.log(row) });
  return M;
}

var Z34 = [
  [0, 1, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1]
];
var Z45 = [
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1]
];
zeroMatrix(Z34);
zeroMatrix(Z45);

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1
// using only one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat")
function isSubstring(s1, s2) {
  return (s2.indexOf(s1) > -1);
}

// console.log(assertEquals(isSubstring("water", "waterbottle"), true));
// console.log(assertEquals(isSubstring("water", "water"), true));

function stringRotation(s1, s2) {
  return s1.length === s2.length && (s2+s2).indexOf(s1) > -1;
}

console.log("stringRotation Test 1: ", assertEquals(stringRotation("water", "water"), true));
console.log("stringRotation Test 2: ", assertEquals(stringRotation("waterbottle", "erbottlewat"), true));
console.log("stringRotation Test 3: ", assertEquals(stringRotation("waterbot", "erbottlewat"), false));
console.log("stringRotation Test 4: ", assertEquals(stringRotation("waterbottle", "erbottle"), false));
