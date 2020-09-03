// input : string
// output : string within a box

// algo :
//get string length
// box width = str.length + 1 white space in each side
// box hieght = 5 lines
// display the result


// function logInBox(str) {
//   let box_width = str.length === 0 ? 2 : str.length;
//   let box_hieght = 3;
//   let horizentalLine = `+${''.padEnd(box_width, '-')}+`;
//   let emptyLine = `|${''.padEnd(box_width)}|`;

//   console.log(horizentalLine);
//   let line = 1;
//   while ( line < box_hieght) {
//     if(line === Math.ceil(box_hieght/2)) console.log(`|${str}|`);
//     console.log(emptyLine);
//     line ++;
//   }
//   console.log(horizentalLine);
// }


// update the previous function to take the max_width as second argument
function logInBox(str, maxWidth) {
  let padding = 2;
  let box_width = maxWidth + padding|| str.length + padding;
  let box_hieght = 3;
  let horizentalLine = `+${''.padEnd(box_width, '-')}+`;
  let emptyLine = `|${''.padEnd(box_width)}|`;

  console.log(horizentalLine);
  let line = 1;
  while ( line < box_hieght) {
    if(line === Math.ceil(box_hieght/2)) console.log(`| ${str.slice(0, box_width - padding).padEnd(box_width - 1)}|`);
    console.log(emptyLine);
    line ++;
  }
  console.log(horizentalLine);
}

// word wrapping messages, that appear on multilines but still contained within the box
function logInBox(str, maxWidth) {
  let padding = 2;
  let box_width = maxWidth + padding|| str.length + padding;
  let box_hieght = Math.ceil(str.length / maxWidth);
  let horizentalLine = `+${''.padEnd(box_width, '-')}+`;
  let emptyLine = `|${''.padEnd(box_width)}|`;

  console.log(horizentalLine);
  console.log(emptyLine);

 if(str.length !== 0) {
    let truncated_str = str.slice(0);
    while (truncated_str.length > 0) {
        let currentStr = truncated_str.slice(0, maxWidth);
        console.log(`| ${currentStr.padEnd(box_width - 1)}|`);
        truncated_str = truncated_str.slice(maxWidth);
    }
 }
  console.log(emptyLine);
  console.log(horizentalLine);
}

logInBox('hellooooooooooooooool', 6);