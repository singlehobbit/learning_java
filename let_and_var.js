//main scope
function withVar() {
  //function scope
  // #1 block
  var i = 'function var';
  if (true) {
    // #2 block
    var i = 'block var';
    console.log('in block: ', i);
  }
  console.log('in function: ', i);
}

function withLet() {
  //block #1;
  let i = 'function var';
  //i set to 'funciton var'
  if (true) {
    //block #2
    //if in this scope won't be declaration of i
    //then value of i would be inherited from parent scope
    let i;
    //since i is declered here, in block #2
    //this block has separate value for i, 
    //for now it's undefined
    //so let's define it:
    i = 'block var';
    //so i in this block is set to value - 'block var'
    console.log('in block: ', i);// 'in block: block var'
  }
  //back in block #1
  console.log('in function: ', i);// 'in function: function var'
}

//so to sum up about variable declaration in different scopes:
//i = 10 // makes i global variable - visible&achivable in any scope
//var i = // makes i local to the scope in which it was declared and
          // usable in all descendent(included) scopes;
//let i = // makes i local to the block in which it was defined and 
          // usable in any descendent(included) blocks;
          // ** but if in descendent(included) scopes:
          // i is being declared once again,
          // then i looses reference and value which were assigned to i in parent block;
          // or in other words i have completely new reference in that descendent(included) block
//
