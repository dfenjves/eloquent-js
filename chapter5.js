// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.

var arrayOfArrays = [["a", "b"],["c", "d"],["e", "f"]];

function flatten(arr){
  return arr.reduce(function(a,b){
    return a.concat(b)
  })
};

// Using the example data set from this chapter, compute the average age difference between mothers and children

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function getAgeDiffs(family){
  var ageDiffs = [];
  for(var p in family){
    var individual = family[p]
    if (family[individual.mother]){
      ageDiffs.push(individual.born-family[individual.mother].born);
    }
  }
  return ageDiffs;
}

console.log(average(getAgeDiffs(byName)));

//Compute and output the average age of the people in the ancestry data set per century.

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function calculateAges(family){
  var centuries = {};
  for(var p in family){
   var individual = family[p];
   var age = individual.died-individual.born;
   var deathYear = Math.ceil(individual.died/100);
    if (centuries[deathYear]){
      centuries[deathYear].push(age);
    } else {
      centuries[deathYear] = [age];
    }
  }
  return centuries;
}
function averageFromHash(hash){
  var averages = {};
  for (var y in hash){
   averages[y] = average(hash[y]);
  }
  return averages;
}
console.log(averageFromHash(calculateAges(ancestry)));

// Write two functions, every and some, that behave like these methods, except that they take the array as their first argument rather than being a method.

function every(array, test){
  var result = array.filter(test).length == array.length ? true : false;
  return result;
}

function some(array, test){
  var result = array.filter(test).length > 0 ? true : false;
  return result;
}