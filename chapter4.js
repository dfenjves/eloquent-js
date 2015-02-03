//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end){
  rArray = []
  for (var i = start; i <= end; i++) {
    rArray.push(i);
  };
  return rArray;
}

//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

function sum(nums){
  total = 0
  for (var i = 0; i < nums.length; i++) {
    total += nums[i]
  };
  return total;
}

//As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function range(start, end, step){
  rArray = []
  if (arguments.length == 2){
    step = 1;
  }
  if (step > 0){
    for (var i = start; i <= end; i+=step) {
      rArray.push(i);
    };
  } else if (step < 0) {
    for (var i = start; i >= end; i+=step) {
      rArray.push(i);
    };
  };
  return rArray;
}

// Arrays have a method reverse, which changes the array by inverting theorder in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method

function reverseArray(arr){
  var newArr = [];
  for (var i = arr.length - 1; i >= 0 ; i--) {
    newArr.push(arr[i]);
  };
  return newArr;
}

function reverseArrayInPlace(arr){
  for (var i = 0; i < arr.length ; i++) {
    var temp = arr.pop();
    arr.splice(i, 0, temp);
  };
  return arr;
}

// Deep Equals

function deepEqual(a,b){
  function isValidObject(n){
   return typeof(n) == "object" && n != null
  }
  
  if(isValidObject(a) && isValidObject(b)){
    if(Object.keys(a).length !== Object.keys(b).length){
     return false;
    } else {
        var result = true;
        Object.keys(a).map(function(k){
          result = deepEqual(a.k, b.k);
        });
      return result;
    }      
  } else {
   return a === b 
  }
   
}

