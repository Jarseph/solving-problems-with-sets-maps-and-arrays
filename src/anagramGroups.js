/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  if (words.length === 0) {
    return [];
  }
  let group = {};
  words.forEach((element) => {
    const letters = element.split("").sort();
    group[letters] ? group[letters].push(element) : (group[letters] = [element]);
  });
  return Object.values(group);
}
/*
The Object.values() static method returns 
an array of a given object's own enumerable 
string-keyed property values.
*/

module.exports = anagramGroups;
