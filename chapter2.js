//Triangle maker
var word = "#";
for (var i = 0; i < 6 ; i++) {
  console.log(word);
  word = word + "#";
};

//Even simpler:

var word = "#";
while (word.length < 7){
  console.log(word)
  word += "#"
}

//FizzBuzz

for (var i = 0; i < 100; i++) {
  if (i % 15 == 0){
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
};

//Chessboard
var board = "";
var size = Number(prompt("What size is the board?"))
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if (i % 2 == 0){
      j % 2 == 0 ? board += " " : board += "#";
    } else {
      j % 2 == 0 ? board += "#" : board += " ";
    }
  };
  board += "\n"
};
console.log(board)