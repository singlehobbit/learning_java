//regular function - with if/else checks:
function checkSign(num) {
  if (num < 0) {
    return 'negative';
  } else if (num == 0) {
    return '0';
  } else {
    return 'positive';
  }
}

//same function but with ternary operator and other nested ternary operator:
function checkSign2(num) {
  return num < 0 ? 'negative' : num == 0 ? '0' : 'positive';
}
