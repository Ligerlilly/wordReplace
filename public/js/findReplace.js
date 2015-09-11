var findReplace = function(phrase, toBeReplaced, replacement) {
  var words = [];
  words = phrase.split(' ');
  for (index in words) {
    if (words[index].toLowerCase() === toBeReplaced.toLowerCase()) {
      words[index] = replacement;
    }
  }

  if (words.join(' ') === phrase) {
    return 'no match';
  }

  return words.join(" ");
};

module.exports = findReplace;
