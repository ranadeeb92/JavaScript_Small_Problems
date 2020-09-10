// input : number(floating point an angle 0-360)
// string : represent that angle in degrees,min, sec
// use degree symbol to represent degrees
// use &#730  ˚;
// use ' to represent minuts
// use " to represent seconds
// there are 60 min in a degree and 60 sec in a min

// example :
// dms(30) => 3000'00"
// dms(76.73) => 7643'48"

// algo:
// declare a str variable
// build the str to represent the angle input in degrees,min, sec
//  -compute degreee(input) to integer
//  -compute minuts (input - degree * 60) to integer
//  -compute seconds ((input - degree * 60) - minutes * 60) to integer
// return str

// function dms(angle) {
//   const DEGREE_SYMBOL = "\xB0";
//   let angle_str = "";
//   const MINUTE_PER_DEGREE = 60;
//   const SECOND_PER_MINUTE = 60;
//   let degree = Math.floor(angle);
//   let minutes = Math.floor((angle - degree) * 60);
//   let seconds = Math.floor(((angle - degree) * 60 - minutes) * 60);

//   angle_str = `${degree}${DEGREE_SYMBOL}${padZeros(minutes)}'${padZeros(
//     seconds
//   )}"`;
//   return angle_str;
// }

// function padZeros(number) {
//   let str_number = String(number);
//   return str_number.length < 2 ? "0" + number : number;
// }

// update the code to return a value in the appropriate range when the input is less than 0 or greater than 360
const MINUTE_PER_DEGREE = 60;
const SECOND_PER_MINUTE = 60;
const SECOND_PER_DEGREE = MINUTE_PER_DEGREE * SECOND_PER_MINUTE;

function dms(givenAngle) {
  const DEGREE_SYMBOL = "\xB0";
  let angle_str = "";

  let degree = computedegree(givenAngle);
  let minutes = computeMinutes(givenAngle);
  let seconds = computeSeconds(givenAngle, minutes);

  angle_str = `${degree}${DEGREE_SYMBOL}${padZeros(minutes)}'${padZeros(
    seconds
  )}"`;
  return angle_str;
}

// ---helper functions--
function computedegree(angle) {
  let degree = 0;
  if (angle < 0) {
    degree = 360 + Math.floor(angle);
    degree = degree > 0 ? degree : 360 + degree;
  } else if (angle > 360) {
    degree = Math.floor(angle) - 360;
  } else {
    degree = Math.floor(angle);
  }
  return degree;
}

function computeMinutes(angle) {
  let positive_angle = Math.abs(angle);
  return Math.floor(
    (positive_angle - Math.floor(positive_angle)) * MINUTE_PER_DEGREE
  );
}

function computeSeconds(angle, minutes) {
  let positive_angle = Math.abs(angle);
  return Math.floor(
    ((positive_angle - Math.floor(positive_angle)) * MINUTE_PER_DEGREE -
      minutes) *
      SECOND_PER_MINUTE
  );
}

function padZeros(number) {
  let str_number = String(number);
  return str_number.length < 2 ? "0" + number : number;
}

console.log(dms(-400)); // 320°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"

console.log(dms(-1)); // 359°00'00"
console.log(dms(400)); // 40°00'00"
console.log(dms(-40)); // 320°00'00"
console.log(dms(-420)); // 300°00'00"
