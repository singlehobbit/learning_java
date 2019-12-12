function numbersToWords(val) {
  switch(val) {
    case 1:
      output = 'one';
      break;
      //if no break; here then code will run next case!
    case 2:
      return output = 'two';
    case 3:
      output = 'three';
      break;
    case 4:
      output = 'fore';
      break;
    case 'secret':
      output = 'oh you know da path, jaday!';
      break;
    default:
      output = 'default output';
      break;
  }
  return output;
}

console.log(numbersToWords(3));
console.log(nani = 'nnuuuu');

function guessSet(val) {
  switch(val) {
      //if you omit break; then it can return
      //same result for multiple cases
    case 1:
    case 2:
    case 3:
      return 'you entered 1,2 or 3';
    case 4:
    case 5:
    case 6:
      return 'you entered 4,5 or 6';
  }
}

console.log(guessSet(3));
