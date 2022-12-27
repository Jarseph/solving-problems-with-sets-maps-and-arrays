/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  const newSet1 = s1.toLowerCase().split("")
    .sort()
    .join("");
  const newSet2 = s2.toLowerCase().split("")
    .sort()
    .join("");
  if (newSet1 === newSet2) {
    return true
  }
  return false;
}

module.exports = anagram;
