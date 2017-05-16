// getPrimes(n):
// Return an array of prime numbers up to n.
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (var i=Math.sqrt(n); i > 1; i--) {
    if (n%i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(n) {
  var primes = [];
  for (var i=2; i<=n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
}

// countLeapYears(startYear, endYear):
// A leap year is divisible by 4 but not by 100
// unless divisible by 400
// assume startYear < endYear, startYear > 1582
// include startYear; don't include endYear
function isLeapYear(year) {
  return ((year%4 === 0 && year%100 !== 0) || year%400 === 0);
}

function countLeapYears(startYear, endYear) {
  var leapYears = 0;
  for (var i=startYear; i< endYear; i++) {
    if (isLeapYear(i)) {
      leapYears++;
    }
  }
  return leapYears;
}

// dayOfWeek(month, day, year):
// anchor year: 1589, 1/1/1589 is a Sunday
// month: 1-12, day: 1-last day of month
function printDay(dayNumber){
  switch(dayNumber % 7){
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("WTF mate? Bad data!");
  }
}

function dayOfWeek(month, day, year) {
  // subtract one from month so that daysInEachMonth's indeces line up with month
  month--;
  // subtract one from day so 1/1/1589 means 0 total days after anchor date, and 0%7 = 0, Sunday.
  day--;

  var daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var anchorYear = 1589; // 1/1/1589 is assumed a Sunday

  // take into account leap years. for every leap year there is an additional day to account
  var totalLeapDays = countLeapYears(anchorYear, year);

  if (month > 1 && isLeapYear(year)) {
    totalLeapDays++;
  }

  // if the given month is January, there are no full months to add, which means nothing to .reduce()
  var daysFromFullMonths = daysInEachMonth.slice(0, month).reduce(function(a, b) { return a+b; }, 0);

  var totalDays = (year-anchorYear)*365 + totalLeapDays + daysFromFullMonths + day;

  printDay(totalDays%7);
}

dayOfWeek(12, 5, 1989);
