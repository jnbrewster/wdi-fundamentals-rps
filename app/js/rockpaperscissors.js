////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

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
  return move;
}

function getComputerMove(move) {
  move = move || randomPlay();
  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
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
  else if (computerMove === "rock" && playerMove === "scissors" ) {
    winner = "computer";
  }
  else if (computerMove === "paper" && playerMove === "rock" ) {
    winner = "computer";
  }
  else if (computerMove === "scissors" && playerMove === "paper" ) {
    winner = "computer";
  }
  else {
    console.log('Choose "rock", "paper" or "scissors".');
  }
  return winner;
}

function printChoices() {
  console.log("You chose " + playerMove + ".");
  console.log("Computer chose " + computerMove + ".");
}

function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");
  var playerWins = 0;
  var computerWins = 0;
  // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  var winner = getWinner(playerMove, computerMove);
  var playerMove = getPlayerMove();
  var computerMove = getComputerMove();

  while (playerWins < 5 || computerWins < 5) {
    if (winner === "player") {
      console.log("Player wins this round!");
      printChoices();

      playerWins += 1;
    }
    else if (winner === "computer") {
      console.log("Computer wins this round!");
      printChoices();
      computerWins += 1;
    }
    else if (winner === "tie") {
      console.log("It was a tie!");
    }
  }
  if (playerWins === 5) {
    console.log("Player wins the game!");
    printChoices();
  }
  else if (computerWins === 5) {
    console.log("Computer wins the game!");
    printChoices();
  }
  console.log("Player's score is: " + playerWins + ". " + "Computer's score is: " + computerWins + ".");
  return [playerWins, computerWins];
}
