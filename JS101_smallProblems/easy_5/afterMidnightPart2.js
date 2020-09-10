// input : string
// output : number (number of minutes after midnight)
// rules :
// the returned value is between 0 - 1439

// algorithm :
// 1 - convert the input string to array of two elements
// - first element represents hour
// - second element represents minutes
// 2- Compute minutes after midnight
// - compute How many minutes Per given hour => min = 60 * hour
// - add the given minutes to the computed minutes
// - check if computed minutes between 0 - 1439
// 3 - return computed minutes

// before midnight
// algorithm :
// 1 - convert the input string to array of two elements
// - first element represents hour
// - second element represents minutes
// 2- Compute minutes after midnight
// - compute How many minutes Per given hour => min = 60 * hour
// - add the given minutes to the computed minutes
// - check if computed minutes between 0 - 1439
// 3 - return final result

const MINUTE_PER_HOUR = 60;
const MINUTE_PER_DAY = 1440;

function afterMidnight(str) {
  let [hour, minutes] = str.split(":").map((ele) => Number(ele));
  let minutesAfterMidnight = MINUTE_PER_HOUR * hour;
  minutesAfterMidnight += minutes;
  return minutesAfterMidnight % MINUTE_PER_DAY;
}

function beforeMidnight(str) {
  let minutesAfterMidnight = afterMidnight(str);
  return (MINUTE_PER_DAY - minutesAfterMidnight) % MINUTE_PER_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
