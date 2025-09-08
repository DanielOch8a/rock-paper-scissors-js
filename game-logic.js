let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
  let message = "";

  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    humanScore++;
    message = "Congrats! You Win. " + humanChoice + " beats " + computerChoice;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    message = "Fail! You lose. " + computerChoice + " beats " + humanChoice;
  } else {
    message = "Draw! Very Funny. " + humanChoice + " and " + computerChoice;
  }
  return console.log(message);
}

function getComputerChoice() {
  let random_number = Math.floor(Math.random() * 3);
  let choice = "";

  if (random_number === 0) {
    choice = "rock";
  } else if (random_number === 1) {
    choice = "paper";
  } else if (random_number === 2) {
    choice = "scissors";
  }

  return choice;
}

function getHumanChoice() {
  let choice = parseInt(
    prompt(
      "Please choice with a number an option 0)rock, 1)paper or 2)scissors"
    )
  );

  if (choice === 0) {
    choice = "rock";
  } else if (choice === 1) {
    choice = "paper";
  } else if (choice === 2) {
    choice = "scissors";
  }

  return choice;
}
