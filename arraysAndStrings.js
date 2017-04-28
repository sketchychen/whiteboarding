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

var isUniqueTest1 = 'a;sdklfj';
var isUniqueTest2 = 'asdf;lkja';

console.log('isUniqueTest1: ', isUnique(isUniqueTest1));
console.log('isUniqueTest2: ', isUnique(isUniqueTest2));
