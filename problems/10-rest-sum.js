/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
restSum(0); // => 0
***********************************************************************/

function restSum(...numbers) {
  // Initialize a variable to store the sum.
  let sum = 0;

  // Loop through all the numbers and add them to the sum.
  for (const number of numbers) {
    sum += number;
  }

  // Return the sum.
  return sum;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;
