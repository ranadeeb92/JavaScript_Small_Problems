// each century is a 100 years
// return a string 'century number end with a string{st, nd , rd or th}'
// new century begins with years end with 01
// 1901 - 2000  comprise the 20th century

// algorithm:
// compute what century is it.
//  - 1 century = 100 years => century number = (years/100) rounded up
// bulid the returning string
//  - string = century number + one of these ends(st, nd, rd or th)
// return the string

// my solution
// function buildcenturyString(lastDigit, centuryNumber) {
//   switch (lastDigit) {
//     case "1":
//       return `${centuryNumber}st`;
//     case "2":
//       return `${centuryNumber}nd`;
//     case "3":
//       return `${centuryNumber}rd`;
//     default:
//       return `${centuryNumber}th`;
//   }
// }
// function century(number) {
//   let centuryNumber = Math.ceil(number / 100);
//   let century_str = String(centuryNumber);
//   if (centuryNumber >= 10 && centuryNumber <= 19) {
//     century_str = `${centuryNumber}th`;
//   } else {
//     century_str = buildcenturyString(
//       century_str[century_str.length - 1],
//       centuryNumber
//     );
//   }
//   return century_str;
// }

// Launch school solution
function century(year) {
  let centuryNumber = Math.ceil(year / 100);
  return String(centuryNumber) + getSuffix(centuryNumber);
}

function getSuffix(centuryNumber) {
  // check last two digits
  if (catchWithTH(centuryNumber % 100)) {
    return "th";
  } else {
    // check last digit
    let lastDigit = centuryNumber % 10;
    switch (lastDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
}

function catchWithTH(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10123));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));
console.log(century(2020));
