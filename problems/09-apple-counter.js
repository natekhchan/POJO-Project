/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a 
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word 
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {
  // Convert all keys to lowercase for easier searching.
  const lowercasedKeys = Object.keys(appleObj).map(key => key.toLowerCase());
  
  // Initialize a counter for keys containing the word "apple."
  let count = 0;

  // Iterate through the lowercased keys and count those that contain "apple."
  for (const key of lowercasedKeys) {
    if (key.includes('apple')) {
      count++;
    }
  }

  // Return the count of keys containing "apple."
  return count;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
