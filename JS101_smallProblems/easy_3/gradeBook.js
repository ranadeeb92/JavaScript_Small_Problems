// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - 3 numbers
// Output:
// - string 
// Rules:
// - consider the numerical score letter grade list
// - input scores between 0 - 100
// - output is the letter associated with average
// - average = score1 + score2 + score3 / 3
// Questions: 
// -
// EXAMPLES/TEST CASES:
// i: 30, 30 , 30 
// =>
// o: 'F'
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: numbers 
// ALGORYTHM: 
// grade = computed average 
// get the letter associated with the grade
// - compare the grade using letter grade list
// return the letter
//
// PSEUDOCODE:
// 

function gradeBook(score1, score2, score3) {
    let avg = (score1 + score2 + score3 ) / 3;
    if (0 <= avg && avg < 60)   {
      return 'F';
    } else if (60 <= avg && avg < 70) { 
      return 'D';
    } else if (70 <= avg && avg < 80) {
       return 'C';
    } else if (80 <= avg &&avg < 90) {
     return 'B';
    } else if (90 <= avg && avg <= 100) {
     return 'A';
   }
}

console.log(gradeBook(95, 90, 93));
console.log(gradeBook(50, 50, 95));
console.log(gradeBook(30, 40, 0));