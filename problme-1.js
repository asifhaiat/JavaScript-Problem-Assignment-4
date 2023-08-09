/* 
You will be given a function called mindGame("which will take a positive number as input.")
Now your task: You have to multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output. Please solve my problem.
*/

/* Problem-1 */
function mindGame() {
  const number = parseInt(prompt("Please enter a positive number: "));

  // Check if the input is a number and greater than zero
  if (isNaN(number) || number <= 0) {
    console.log("Invalid input! Please enter a positive number.");
    return;
  } else {
    const result = (number * 3 + 10) / 2 - 5;
    return result;
  }
}

mindGame();
