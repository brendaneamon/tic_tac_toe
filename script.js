// User starts with either X or O
// User clicks on a space, and that space shows an X or an O
  // space displays the X or O, depending on which one was currently in effect
  // turn switches to other player
// Play continues until one of two things happens:
    // No spaces remain
    // A player, either X or O, has won
// Reset button at the bottom of the page clears all entries

var playerOne = true;
var square = $(".square");

function getWinner () {
}

square.on("click", function(){
  var self = $(this);
  if (self.contents().length === 0) {
    console.log(self);
    if (playerOne){
      self.html("X");
      self.addClass("clicked");
      playerOne = false;
      getWinner();
      return playerOne;
    } else if (playerOne === false) {
      self.html("O");
      self.addClass("clicked");
      playerOne = true;
      getWinner();
      return playerOne;
    }
  }
});

$("#reset-button").click(function(){
  square.removeClass("clicked");
  square.html("");
  alertify.success("Game Board Cleared");
});



// if (((squareOne.html() === "X") && (squareTwo.html() === "X") && (squareThree.html() === "X")) ||
//     ((squareFour.html() === "X") && (squareFive.html() === "X") && (squareSix.html() === "X"))  ||
//     ((squareSeven.html() === "X") && (squareEight.html() === "X") && (squareNine.html() === "X"))  ||
//     ((squareOne.html() === "X") && (squareFour.html() === "X") && (squareSeven.html() === "X"))  ||
//     ((squareTwo.html() === "X") && (squareFive.html() === "X") && (squareEight.html() === "X"))  ||
//     ((squareThree.html() === "X") && (squareSix.html() === "X") && (squareNine.html() === "X"))  ||
//     ((squareOne.html() === "X") && (squareFive.html() === "X") && (squareNine.html() === "X"))  ||
//     ((squareThree.html() === "X") && (squareFive.html() === "X") && (squareSeven.html() === "X"))
// ) { alertify.alert("X has triumped!");
// } else if (((squareOne.html() === "O") && (squareTwo.html() === "O") && (squareThree.html() === "O")) ||
//     ((squareFour.html() === "O") && (squareFive.html() === "O") && (squareSix.html() === "O"))  ||
//     ((squareSeven.html() === "O") && (squareEight.html() === "O") && (squareNine.html() === "O"))  ||
//     ((squareOne.html() === "O") && (squareFour.html() === "O") && (squareSeven.html() === "O"))  ||
//     ((squareTwo.html() === "O") && (squareFive.html() === "O") && (squareEight.html() === "O"))  ||
//     ((squareThree.html() === "O") && (squareSix.html() === "O") && (squareNine.html() === "O"))  ||
//     ((squareOne.html() === "O") && (squareFive.html() === "O") && (squareNine.html() === "O"))  ||
//     ((squareThree.html() === "O") && (squareFive.html() === "O") && (squareSeven.html() === "O"))
//   ) { alertify.alert("O stands victorious!");
//   }
