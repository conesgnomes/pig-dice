// Business Logic

function Game(total) {
  this.tally = 0; // []
  this.total = total;
}
// getting a new random number and saving it to my tally

Game.prototype.newRoll = function() {
  var min = 1;
  var max = 6;
  var random = Math.floor(Math.random()*(max-min+1)+min);
  this.tally = this.tally + random;
  return random;
}

Game.prototype.newTotal = function() {
  this.total = this.total + this.tally; //this is what we're trying to fix
}

// UI Logic

$(function() {
  var playerOneGame = new Game();
  var total = 0;

  $("button.playerOneNumberGen").click(function(event) {
    event.preventDefault();

    var result =$(".playerOneNumberGen");
    var roll = playerOneGame.newRoll()

    $(".playerOneCurrentRoll").text(roll);
    $(".playerOneRoundTally").text(playerOneGame.tally);

  });

  $("button.playerOneHold").click(function(event) {
    event.preventDefault();

    var playerOneTotal = playerOneGame.newTotal()
    console.log(playerOneTotal);
  });
});

// $("button.playerTwoNumberGen").click(function(event) {
//   event.preventDefault();
//
//   var result =$(".playerTwoNumberGen");
//
//   var roll = newGame.newRoll()
//
//   $(".playerTwoRoundTally").text(roll);
//
//   console.log(newGame.tally);
//
// });
