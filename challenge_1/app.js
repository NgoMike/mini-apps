// first move - always Player X
// console log Win or Tie
// btn -> resets game
// no: jquery, react, libs, frameworks
// css - optional
// Doesnt reload page from user actions

// M: storage for moves already made
// V: render moves made / console log win or tie / refresh page for new game
// C: player moves when click / new game button

// show status
var status = document.getElementsByClassName('status');
var showStatus = function (status) {
  alert('Player X Won!');
};

// on click, restart a new game
var new_game = document.getElementsByClassName('newGame');
var restart = function (new_game) {

}



// user input
// var player X
// var player O
var board = {
  1: ['one', 'two', 'three'],
  2: ['four', 'five', 'six'],
  3: ['seven', 'eight', 'nine']
}




var turns = 1;

// toggle pieces
var togglePiece = function(event) {
  console.log(event);
  var newDiv = document.createElement('div');
  var x = document.createTextNode('X');
  var o = document.createTextNode('O');

  var boxChoice = function() {
    for (var row in board) {
      var column = board[row];
    }
  }

  // column = event;

  if (turns % 2 !== 0) {
    newDiv.appendChild(x);
    turns++;
    console.log(turns);
  } else {
    newDiv.appendChild(o);
    turns++;
    console.log(turns);
  }
  document.getElementsByClassName('grid-item')[0].appendChild(newDiv);
}

// set event listener for on click, toggle piece
document.getElementsByClassName('grid-item').addEventListener('click', togglePiece);




// managing app state
// state
// setState = won or tie

// set board object with keys 1-3
// each key = a row, value is an array with length of 3
// randomize row and col
// if piece not yet place, place piece

// rendering to screen
// on click, render X or O based on who's turn