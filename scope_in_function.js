var globalVariable = "i'm global variable defined in global scope";

function fun1() {
  //using var in variable declaration makes variable
  //scoped only to this function
  var availableOnlyHere = 'hello from fun1()';
  //not using var before variable declaration
  //makes that variable global in whole code:
  availableAnyWhereElse = "i'm global variable, defined in fun1";
}

function fun2() {
  var output = '';
//this will fire up error:
//  if (availableOnlyHere != undefined) {
//    output += 'availableOnlyHere: ' + availableOnlyHere;
//  }
  if (availableAnyWhereElse != undefined) {
    output += '|availableAnyWhereElse: ' + availableAnyWhereElse;
  }
  if (globalVariable != undefined) {
    output += '|globalVariable: ' + globalVariable;
  }
  console.log(output);
}
fun1();
fun2();

//if we have global and local variables with identical names
//then local variable will get called:
var variable = 'globalVar';
function fun3() {
  var variable = 'fun3 local variable';
  console.log(variable);
}
fun3();//'fun3 loacal variable'
console.log(variable);//'globalVar'
