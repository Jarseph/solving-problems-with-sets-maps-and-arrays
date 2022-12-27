/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  const wordSet = new Set();
  word.split("").forEach((e) => {
    if (wordSet.has(e)) {
      wordSet.delete(e);
    } else {
      wordSet.add(e);
    }
  })
  return wordSet.size <= 1;
}

module.exports = permutationPalindrome;
