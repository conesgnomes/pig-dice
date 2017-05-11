// Business Logic

function Game(tally, total) {
  this.tally = tally; // []
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
  this.total += this.tally;
  return this.total; //NEVER FORGET TO RETURN!!!
}

// UI Logic

$(function() {
  var tally = 0;
  var total = 0;
  var playerOneGame = new Game(tally, total);

  $("button.playerOneNumberGen").click(function(event) {
    event.preventDefault();

    var result =$(".playerOneNumberGen");
    var roll = playerOneGame.newRoll()

    if (roll === 1){
      $(".playerOneCurrentRoll").text("");
      $(".playerOneRoundTally").text("");
    } else if (roll !== 1) {
      $(".playerOneCurrentRoll").text(roll);
      $(".playerOneRoundTally").text(playerOneGame.tally);
    }

    //
    // $(".playerOneCurrentRoll").text(roll);




  });

  $("button.playerOneHold").click(function(event) {
    event.preventDefault();

    var playerOneTotal = playerOneGame.newTotal()
    $(".playerOneTotal").text(playerOneTotal);
    // console.log(playerOneTotal);
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
