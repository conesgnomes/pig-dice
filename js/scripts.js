// Business Logic

function Game(tally, total) {
  this.tally = tally; // []
  this.total = total;
}
// getting a new random number and saving it to my tally

Game.prototype.newRoll = function() {
  var min = 1;
  var max = 6;
  var currentRoll = Math.floor(Math.random()*(max-min+1)+min);
  if (currentRoll === 1) { // if current roll is a 1, tally zeros out
    this.tally = 0;
    alert("Yo! You just lost this round's points -- next player's turn.")
  } else {
    this.tally = this.tally + currentRoll;
  }
  return currentRoll;
}

Game.prototype.newTotal = function() {
  this.total += this.tally;
  return this.total; //NEVER FORGET TO RETURN!!!
}

Game.prototype.holdReset = function() {
  this.tally = 0;
  return this.tally;
  }

// UI Logic

$(function() {
  var tally = 0;
  var total = 0;
  // var currentRoll;
  var playerOneGame = new Game(tally, total);

  $("button.playerOneNumberGen").click(function(event) {
    event.preventDefault();

    var result = $(".playerOneNumberGen");
    var roll = playerOneGame.newRoll()


    $(".playerOneCurrentRoll").text(roll);
    $(".playerOneRoundTally").text(playerOneGame.tally);

  });

  $("button.playerOneHold").click(function(event) {
    event.preventDefault();

    var playerOneTotal = playerOneGame.newTotal();
    var hold = playerOneGame.holdReset();

    $(".playerOneCurrentRoll").empty();
    $(".playerOneRoundTally").empty();
    $(".playerOneTotal").text(playerOneTotal);
    alert("Check out your new total! It's now the next player's turn.");
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
