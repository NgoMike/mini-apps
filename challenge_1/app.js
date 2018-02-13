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
var restart = function (event) {
  // document.querySelectorAll('grid-item').addEventListener('click', empty());
  var children = document.getElementsByClassName('grid-item').childNodes;
  document.querySelectorAll('grid-item').removeChild(children);
}

// document.getElementsByClassName(newGame).addEventListener('click', restart);

// var board = {
//   1: [0, 1, 2],
//   2: [3, 'five', 'six'],
//   3: ['seven', 'eight', 'nine']
// }

// var boxChoice = function() {
//   for (var row in board) {
//     var column = board[row];
//   }
// }

// user input
// var player X
// var player O
var turns = 1;

// toggle pieces
var togglePiece = function(event) {
  // mouse event
  // console.log(event)
  // event object, path property and first element in array. split on space and get 2nd element
  // console.log(event.path[0].getAttribute('class').split(' ').slice(1));
  var box = event.path[0].getAttribute('class').split(' ').slice(1);
  var newDiv = document.createElement('div');
  var x = document.createTextNode('X');
  var o = document.createTextNode('O');

  if (turns % 2 !== 0) {
    newDiv.appendChild(x);
    turns++;
  } else {
    newDiv.appendChild(o);
    turns++;
  }
  // append new div to box on click
  document.getElementsByClassName('grid-item')[box].appendChild(newDiv);
}
// set event listener for on click, toggle piece
document.getElementsByClassName('grid-item').addEventListener('click', togglePiece);



