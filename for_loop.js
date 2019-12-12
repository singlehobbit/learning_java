//nested arrays:
var arr = [[1, 2], [3, 4], [5, 6], [10, 43]]
function totalForArr() { total
  var total = 0
  for (var i = 0; i < arr.length; i++) {
    for (var n = 0; n < arr[n].length; n++) {
      total += arr[i][n];
    }
  }
  console.log(total);
}

function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + 1
}
