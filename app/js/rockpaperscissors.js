////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
  console.log("Please choose either 'rock', 'paper', or 'scissors'.");
  return prompt();
}
function randomPlay() {
  var randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
  move = move || getInput();
  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `getInput()`.

  //refactor move console.log here.
  return move;
}

function getComputerMove(move) {
  move = move || randomPlay();
  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

  //refactor move console.log here.
  return move;
}

function getWinner(playerMove,computerMove) {
  var winner;

  if (playerMove === computerMove) {
    winner = "tie";
  }
  else if (playerMove === "rock" && computerMove === "scissors" ) {
    winner = "player";
  }
  else if (playerMove === "paper" && computerMove === "rock" ) {
    winner = "player";
  }
  else if (playerMove === "scissors" && computerMove === "paper" ) {
    winner = "player";
  }
  else
 {
    winner = "computer";
  }
  return winner;
}

function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");
  var playerWins = 0;
  var computerWins = 0;
  // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  while (playerWins < 5 || computerWins < 5) {
    if (getWinner === "player") {
      console.log("Player wins this round!");
      console.log("You chose " + playerMove + ".");
      console.log("Computer chose " + computerMove + ".");
      playerWins += 1;
    }
    else if (getWinner === "computer") {
      console.log("Computer wins this round!");
      console.log("You chose " + playerMove + ".");
      console.log("Computer chose " + computerMove + ".");
      computerWins += 1;
    }
    else if (getWinner === "tie") {
      console.log("It was a tie!");
    }
  }
  if (playerWins === 5) {
    console.log("Player wins the game!");
  }
  else if (computerWins === 5) {
    console.log("Computer wins the game!");
  }
  return [playerWins, computerWins];
}
