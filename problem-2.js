/* 
You will be given a function called evenOdd(). It will take a string as input. Now you have to output based on the total number of characters in your task: String. Output will be 'even' or 'odd'. Sample Input: ‘Phero’ & Output: odd
*/
/* Problem-2 */
function evenOdd() {
  let userString = prompt("Please enter a string: ");
  if (!isNaN(userString)) {
    return "Error: Input must be a string.";
  } else if (userString.length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

evenOdd();
