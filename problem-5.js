/* 
You will be given a function called gemsToDiamond(). It will take three numbers (the number of gems of your 3 friends) as input.
Power of gems per 1st friend = 21
Power of gems per 2nd friend = 32
Power of gems per 3rd friend = 43

[Gems capacity means how many diamonds a gem can be converted into. ]

Now your task: you have to figure out how many diamonds you will get in total by combining the gems of all your friends. If the number of total diamond is over 1000, then you will get as many diamonds as are left by subtracting 2000 from the total diamond.

Sample Input & Output:-
Input: 1, 1, 1
Output: 96        

Input: 20, 200, 50
Output: 6970
*/

/* Problem-5 */
function gemsToDiamond(gems1, gems2, gems3) {
  if (gems1 < 0 || gems2 < 0 || gems3 < 0 || isNaN(gems1) || isNaN(gems2) || isNaN(gems3)) {
    return "Error: Please enter positive numbers only";
  }
  const powerOfFirstFriend = 21;
  const powerOfSecondFriend = 32;
  const powerOfThirdFriend = 43;

  const totalDiamonds = gems1 * powerOfFirstFriend + gems2 * powerOfSecondFriend + gems3 * powerOfThirdFriend;

  if (totalDiamonds > 1000) {
    return totalDiamonds - 2000;
  } else {
    return totalDiamonds;
  }
}

const numGems1 = parseInt(prompt("Enter gems of first friend: "));
const numGems2 = parseInt(prompt("Enter gems of second friend: "));
const numGems3 = parseInt(prompt("Enter gems of third friend: "));

const totalDiamonds = gemsToDiamond(numGems1, numGems2, numGems3);

console.log(`Total diamonds: ${totalDiamonds}`);
