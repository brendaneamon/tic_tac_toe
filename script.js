// User starts with either X or O
// User clicks on a space, and that space shows an X or an O
  // space displays the X or O, depending on which one was currently in effect
  // turn switches to other player
// Play continues until one of two things happens:
    // No spaces remain
    // A player, either X or O, has won
// Reset button at the bottom of the page clears all entries

var playerOne = true;
var squares = $(".square");
var turnBox = $("#turn-indicator");
var xMoves = [];
var oMoves = [];
var winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// function pushMove (td) {
//   for (i = 0; i < squares.length; i++) {
//     if ($td.attr("class", "squares clicked X")) {
//       xMoves.push($td.index());
//     }  else if ($td.attr("class", "squares clicked O"))  {
//       oMoves.push($td.index());
//     }
//   }
// }

function changeTurn() {
  playerOne ? (playerOne = false) : (playerOne = true);
  return playerOne;
}

$(".square").on("click", function(){
  var self = $(this);
  var i = self.index();
  if (self.contents().length === 0) {
    if (playerOne){
      xMoves.push(parseInt(self.attr("data-num")));
      self.html("X");
      self.addClass("clicked");
      changeTurn();
      turnBox.html("It's O's turn.");
      console.log(xMoves);
    } else
    {
      oMoves.push(parseInt(self.attr("data-num")));
      self.html("O");
      self.addClass("clicked");
      changeTurn();
      turnBox.html("It's X's turn.");
      console.log(oMoves);
    }
  }
});

$("#reset-button").click(function(){
  squares.removeClass("clicked");
  squares.html("");
  turnBox.html("");
  playerOne = true;
  oMoves = [];
  xMoves = [];
  alertify.success("Game Board Cleared");
});
