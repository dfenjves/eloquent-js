//functions
//1. Minimum
function minimum(a,b){
  if (a < b){
    return a
  } else {
    return b
  }
}

//2. Recursive Even

function even(n){
  if (n==0){
    return true;
  } else if (n == 1){
    return false;
  } else {
    return even(n-2);
  }
}

function countChar(phrase, letter){
  var counter = 0;
  for (var i = 0; i < phrase.length; i++) {
    if (phrase[i] == letter){
      counter++;
    }
  };
  return counter;
}