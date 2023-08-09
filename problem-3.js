/* 
You will be given a function called “isLGSeven()”. It will take a number as input.
Now your task: you have to find the difference between the input value and 7. If this difference is smaller than 7, you must return the subtraction. Otherwise you must return double of the input. Means twice the number you took as input.

Input: 6
Output: -1
*/

/* Problem-3 */
function isLGSeven() {
  let num = prompt("Please enter a number: ");

  // Check if the input is not a number
  if (isNaN(num)) {
    return "Error: Input is not a number.";
  }

  num = Number(num);
  if (num - 7 < 7) {
    return num - 7;
  } else {
    return num * 2;
  }
}

isLGSeven();
