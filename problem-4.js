/* 
You will be given a function called findingBadData(). It will take an array as input. Any number of numbers will be in the array. Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero). If any number is negative we will call it "Bad Data". If a number is positive, we will call it "Good Data".Now you have to find out how many bad data are there in your task: array and return that number.

Input: [ 1,2,5 ]
Output: 0

Input: [ -4, -9, -5, -33, -55 ]
Output: 5
*/

/* Problem-4 */
function findingBadData() {
  let input = prompt("Please enter an array of numbers separated by commas: ");
  let arr = input.split(",").map(Number);

  // Check if input is a valid array of numbers
  if (arr.some(isNaN)) {
    return "Error: Invalid input! Please enter only numbers separated by commas.";
  }

  let badDataCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      badDataCount++;
    }
  }
  return badDataCount;
}

findingBadData();
