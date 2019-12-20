//constants behave like let
// + value can be assigned to constant only once
// it means:
// if you'll try to assign new or reassign the same value;
// it will trow an error
// example of error:
// const FIRST = 'first';
// FIRST = 'first'; // will throw an error
// FIRST = 'second'; // will throw an error too

function printManyTimes(str) {
  const SENTANCE = str + ' is cool!';
  for(let i = 0; i < str.length; i++) {
    console.log(SENTANCE);
  }
}

