function randrange(min, max, logs) {
  var ram = Math.random();
  if (logs)
    console.log(ram.toFixed(3));
  return Math.floor(ram * (max + 1 - min) + min);
}

//while i was figuring out how randrange() works
//i needed funciton that would strest test it,
//so testRR() tests my randrange() function
//testRR() accepts min and max values of range;
//and iterations - how many times randrange() will be tested
function testRR(min, max, iterations) {
  var arr
  for(var i = 0; i<iterations; i++) {
    //if (!arr || (arr.lengt > iterations))
    if (!arr)
      arr = [];
    arr.push(randrange(min, max, false));
    //oputput for potential help in error solving:
    console.log("iteration #" + i + " | " + 'arr.length: ' + arr.length);
  }
  //logs of finished test:
  console.log("alert functionis finished");
  console.log('array before sorting: ', arr);
  mySort(arr);
  console.log('array after sorting: ', arr);
  console.log('first element: ', arr[0]);
  console.log('last element: ', arr[arr.length-1]);
}

//made my own sort function cuz sort() isn't working
//the way i need arr to be sorted
function mySort(arr) {
  for(var k = 0; k < arr.length; k++) {
    //console.log('k is : ' + k);
    for(var i = 0; i < arr.length; i++) {
    //console.log('i is = ' + i);
      if (arr[i] > arr[i+1]) {
        //console.log(i+' - '+arr[i]+' | '+(i+1)+' - '+arr[i+1]);
        //console.log('was: ' + arr);
        var reserv = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = reserv;
        //console.log('became: ' + arr);
      }
    }
  }
  return arr;
}

//test subject for mySort()
var myArr = [1,2,3,3,2,1,2,2,3,8,9,44,5,53,51,53,5,21,25,24,28,27];

function return3(a) {
  cnonsole.log('hello input here:');
}
