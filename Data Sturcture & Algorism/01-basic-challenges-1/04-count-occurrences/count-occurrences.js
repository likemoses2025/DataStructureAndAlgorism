function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

countOccurrences('HellLo world', 'l');

module.exports = countOccurrences;
