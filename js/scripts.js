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
  this.total += this.tally
  return this.total;
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
  var playerTwoGame = new Game(tally, total);

  $("button.playerOneNumberGen").click(function(event) {
    event.preventDefault();

    var result = $(".playerOneNumberGen");
    var roll = playerOneGame.newRoll();
    // var playerOneTotal = playerOneGame.newTotal();

    if (roll === 1) {
      $(".playerOneCurrentRoll").empty();
      $(".playerOneRoundTally").empty();
    } else {
      $(".playerOneCurrentRoll").text(roll);
      $(".playerOneRoundTally").text(playerOneGame.tally);
    }
  });

  $("button.playerOneHold").click(function(event) {
    event.preventDefault();

    var playerOneTotal = playerOneGame.newTotal();
    var hold = playerOneGame.holdReset();

    if (playerOneTotal >= 100) {
      alert("Big winner!! You won Pig Dice!");
      location.reload();
    } else {
      $(".playerOneCurrentRoll").empty();
      $(".playerOneRoundTally").empty();
      $(".playerOneTotal").text(playerOneTotal);
      alert("Check out your new total! It's now the next player's turn.");
    }
  });

  $("button.playerTwoNumberGen").click(function(event) {
    event.preventDefault();

    var result = $(".playerTwoNumberGen");
    var roll = playerTwoGame.newRoll();
    // var playerOneTotal = playerOneGame.newTotal();

    if (roll === 1) {
      $(".playerTwoCurrentRoll").empty();
      $(".playerTwoRoundTally").empty();
    } else {
      $(".playerTwoCurrentRoll").text(roll);
      $(".playerTwoRoundTally").text(playerTwoGame.tally);
    }
  });

  $("button.playerTwoHold").click(function(event) {
    event.preventDefault();

    var playerTwoTotal = playerTwoGame.newTotal();
    var hold = playerTwoGame.holdReset();

    if (playerTwoTotal >= 100) {
      alert("Big winner!! You won Pig Dice!");
      location.reload();
    } else {
      $(".playerTwoCurrentRoll").empty();
      $(".playerTwoRoundTally").empty();
      $(".playerTwoTotal").text(playerTwoTotal);
      alert("Check out your new total! It's now the next player's turn.");
    }
  });

});
