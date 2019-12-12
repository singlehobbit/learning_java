var ourDog = {
  "name" 
  :"Cheperd",
  "legs":4,
  "tails": 1,
  "friends": ["everyting!"],
  "special proporty": "magick"
};

var myDog = {
  "name": "Chappy",
  "legs": 3,
  "tails": 2,
  "friends": []
};

var testObject = {
  1 : 'cat',
  2 : 'dog',
  3 : 'lama',
  4 : 'lion',
  5 : 'zeebra'
};

//ways to acces object proporties values:
ourDog.name
//with bracket notation you may acces proporties with space in their names:
var special = ourDog["special proporty"];
console.log(special);
//+ you can dinamicly look up proporty with bracket notation:
var number = 3;
var example = testObject[number];
console.log(example);

//objects are improoved switch statement:

function getPare(val) {
  switch(val) {
    case 1: 
      return 'cat';
    case 2:
      return 'dog';
    case 3:
      return 'lama';
    case 4:
      return 'lion';
    case 5:
      return 'zeebra';
    default:
      return 'no such variant';
  };
}

function getPare2(val) {
  var testObject = {
    1 : 'cat',
    2 : 'dog',
    3 : 'lama',
    4 : 'lion',
    5 : 'zeebra'
  };
  return testObject[val] || "not today";
};

//object.hasOwnProperty - method that check property for existence:
function checkObj(object, property) {
  if (object.hasOwnProperty(property)) {
    return object[property];
  } else {
    return "not found";
  };
};

function checkObj2(object, property) {
  if (object[property] == undefined) return "not found";
  else return object[property];
};

function checkObj3(object, property) {
  return (object[property] || "not found");
};
