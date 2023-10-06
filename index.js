function isPalindrome(word) {
  // Convert the string to lowercase.
  word = word.toLowerCase();

  // Iterate over the string, comparing the current character to the
  // corresponding character from the end of the string.
  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    if (word[i] !== word[j]) {
      return false;
    }
  }

  // If all characters match, return true.
  return true;
}


/* 
  Pseudocode:
   1. Convert the string to lowercase.
   2. Iterate over the string, comparing the current character to the corresponding character from the end of the string.
   3. If any two characters are not the same, return false.
   4. If all characters match, return true.

*/

/*
  The function isPalindrome takes a string as input and returns true if the string is a palindrome, and false otherwise. A palindrome is a string that reads the same forwards and backwards, such as "mom" or "racecar".

 The function first converts the input string to lowercase. This is because we want to ignore case when checking for palindromes.

 Next, the function iterates over the string, comparing the current character to the corresponding character from the end of the string. If any two characters are not the same, the function returns false. Otherwise, the function returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
