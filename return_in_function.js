//return in function skips all the code belove it and quits functions
function trueOrFalse(bolean) {
  output = '';
  if (bolean) {
    output += 'argument is true';
    return output;
  }
  output += 'actually, argument is false';
  return 'what\'s now?';
  return output;
  output = 2;

}

console.log(trueOrFalse(false));
console.log(output);
