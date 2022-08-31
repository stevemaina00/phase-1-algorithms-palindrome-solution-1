function isPalindrome(word) {
  // Write your algorithm here
  // reverse input string

	const reversedWord = reverseString(word);
  // compare the reversed input to a string
  return word === reversedWord;
}
function reverseString(word) {
	return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
    reverse the input string
if the reversed string is the same as the input
  return true
else
  return false
  
*/

/*
  Add written explanation of your solution here
    We are going to use the reverseString function to reverse the input string. Then we will compare the reversed string to the input string. If they are the same, we will return true. If they are not the same, we will return false.

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
