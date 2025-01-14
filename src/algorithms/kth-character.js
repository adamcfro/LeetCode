/**
 * Alice and Bob are playing a game. Initially, Alice has a string word = "a".
 * You are given a positive integer k. Now Bob will ask Alice to perform the
 * following operation forever:
 * • Generate a new string by changing each character in word to its next
 * character in the English alphabet, and append it to the original word.
 * For example, performing the operation on "c" generates "cd" and performing
 * the operation on "zb" generates "zbac".
 *
 * Return the value of the kth character in word, after enough operations have
 * been done for word to have at least k characters. Note that the character
 * 'z' can be changed to 'a' in the operation.
 *
 * @format
 * @param {number} k - A positive number representing kth character.
 * @returns {string} - Returns the k - 1 character from generated word.
 */

function kthCharacter(k) {
  let word = "a";
  let generatedString = "";
  while (word.length < k) {
    for (let i = 0; i < word.length; i++) {
      generatedString += String.fromCharCode(word.charCodeAt(i) + 1);
    }
    word += generatedString;
    generatedString = "";
  }
  return word[k - 1];
}