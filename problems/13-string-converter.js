/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  // Initialize an empty object to store the counts.
  const counts = {};

  // Loop through the characters in the string.
  for (const char of string) {
    // If the character is not in the counts object, initialize it to 1.
    if (counts[char] === undefined) {
      counts[char] = 1;
    } else {
      // If the character is already in the counts object, increment its count.
      counts[char]++;
    }
  }

  // Return the counts object.
  return counts;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
