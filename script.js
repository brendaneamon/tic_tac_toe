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

// function getWinner () {
//
// }

$(".square").on("click", function(){
  var self = $(this);
  if (self.contents().length === 0) {
    if (playerOne){
      self.html("X");
      self.addClass("clicked");
      playerOne = false;
      turnBox.html("It's O's turn.");
      // getWinner();
      return playerOne;
    } else
    {
      self.html("O");
      self.addClass("clicked");
      playerOne = true;
      turnBox.html("It's X's turn.");
      // getWinner();
      return playerOne;
    }
  }
});

$("#reset-button").click(function(){
  squares.removeClass("clicked");
  squares.html("");
  turnBox.html("");
  alertify.success("Game Board Cleared");
});
