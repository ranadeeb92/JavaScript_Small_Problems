// input: number
// output: string (time of a day in 24 hour format hh:mm)
// rules:
// time of a day rpresented as a number of minutes defore or after midnight
// if number of minutes is positive => time is after midnight
// if number of minutes is negatives => time is before midnight

// algorithm:
// 1 compute minutes per day
// 2 declare str to hold the day time in 24 format
// 3 compute day time from the input
//   -1 if input minutes is negative => day time is after midnight
//      - hours = rounded down((minute per day - input minutes) / 60)
//      - minutes = ((minute per day - input minutes) / 60) - hours) * 60
//   -2 if not => day time is before midnight
//      - hours = rounded down((minute per day + input minutes) / 60)
//      - minutes = ((minute per day - input minutes) / 60) - hours) * 60
// 4 build str in 24 format
// 5 return str

const MINUTE_PER_HOUR = 60;
const HOUR_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTE_PER_HOUR * HOUR_PER_DAY;
const DAY_PER_WEEK = 6;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedensday",
  "Thursday",
  "Friday",
  "Saterday",
];

function timeOfDay(minutes) {
  let dayTime = "";
  let dayHour = 0;
  let dayMinutes = 0;
  let day = Math.floor(minutes / MINUTES_PER_DAY);
  // ignore days
  let deltaminutes = minutes % MINUTES_PER_DAY;
  if (deltaminutes < 0) {
    deltaminutes = MINUTES_PER_DAY + deltaminutes;
    day = DAY_PER_WEEK + Math.ceil(minutes / MINUTES_PER_DAY);
  }
  dayHour = computeHour(deltaminutes);
  dayMinutes = computeMinutes(deltaminutes);

  dayTime = build24HourFormatStr(dayHour, dayMinutes, day);
  return dayTime;
}

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function build24HourFormatStr(hour, minutes, dayNumber) {
  return `${getTheDay(dayNumber)} ${leadingZero(hour)}:${leadingZero(minutes)}`;
}

function getTheDay(number) {
  return days[number];
}

function computeHour(minutes) {
  return Math.floor(minutes / MINUTE_PER_HOUR);
}

function computeMinutes(minutes) {
  return minutes % MINUTE_PER_HOUR;
}

console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(-4231));
