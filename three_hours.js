var myString = 'Jello World!';
console.log(myString[0]);
var myOtherString = 'Hello World';
console.log(myOtherString);
console.log("last character of myString variable: " + myString[myString.length -1]);
console.log(myString[myString.length - 4]);

function wordsCollaps( first, second, third, forth ) {
  var result;
  result = first + ' ' + second + ' ' + third + ' ' + forth;
  return result;
};

console.log(wordsCollaps('i', 'ate', 'big', 'apple'));

var myArray = [1,2,3,4,5,6];
console.log(myArray);
//pop(), push(), shift(), unshift()
console.log(myArray.pop());
console.log(myArray.shift());
console.log(myArray);
console.log(myArray.push('hello there'));
console.log(myArray);
myArray.unshift('in beginning');
console.log(myArray);


//functions
//number determines how many times word gets to repeat
function repeat(word, number) {
  if (number == 0) console.log('');
  if (number < 0) console.log('Error');
  if (number > 0) {
    var toRepeat = word;
    for(var i = 1; i < number; i++) {
      word += ' ' + toRepeat;
    };
    console.log(word);
  };
};

repeat('nani', 5);
repeat('nani', 0);
repeat('nani', -22);
