// Business Logic
function Roll(roll) {
  this.roll = roll;
}

Roll.prototype.newRoll = function(min, max) {
  var min = 1;
  var max = 6;
  return Math.floor(Math.random()*(max-min+1)+min);
}

// PlayerOne.prototype.roll = function(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// function PlayerOne(roll, roundTotal, gameTotal) {
//   this.roll = roll
//   this.gameTotal = gameTotal;
//   this.roundTotal = roundTotal;
// }
// UI Logic

$(function() {
  $("button.playerOneNumberGen").click(function(event) {
    event.preventDefault();

    var result =$(".playerOneNumberGen");

    var rolls = new Roll(result);

    $(".playerOneRoundTally").text(rolls.newRoll);

  });
  $("button.playerTwoNumberGen").click(function(event) {
    event.preventDefault();

    var result =$(".playerTwoNumberGen");

    var rolls = new Roll(result);

    $(".playerTwoRoundTally").text(rolls.newRoll);

  });
});
