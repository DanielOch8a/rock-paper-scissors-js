let computerScore = 0;
let humanScore = 0;

playGame();

function playGame() {
  let rounds = parseInt(prompt("How many rounds do you want to play?"));
  let message_result = "";

  for (let i = 1; i <= rounds; i++) {
    console.log("Round #" + i);
    playRound(getComputerChoice(), getHumanChoice());
  }

  if (humanScore > computerScore) {
    message_result =
      "Congratulations. You Win the game!\nYour Score: " +
      humanScore +
      " Computer Score: " +
      computerScore;
  } else if (humanScore < computerScore) {
    message_result =
      "Maybe next time pal. You lose the game!\nYour Score: " +
      humanScore +
      " Computer Score: " +
      computerScore;
  } else {
    message_result =
      "Wow. A draw ladies and gentleman.\nYour Score: " +
      humanScore +
      " Computer Score: " +
      computerScore;
  }

  alert(message_result);
  return console.log(message_result);
}

function playRound(computerChoice, humanChoice) {
  let message = "";

  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    humanScore++;
    message =
      "Congrats! You Win. " +
      humanChoice +
      " beats " +
      computerChoice +
      "\nYour Score: " +
      humanScore +
      " Computer Score: " +
      computerScore;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    message =
      "Fail! You lose. " +
      computerChoice +
      " beats " +
      humanChoice +
      "\nYour Score: " +
      humanScore +
      " Computer Score: " +
      computerScore;
  } else {
    message =
      "Draw! Very Funny. " +
      humanChoice +
      " and " +
      computerChoice +
      "\nYour Score: " +
      humanScore +
      " Computer Score: " +
      computerScore;
  }
  alert(message);
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
      "Please choose with a number an option.\n 1)rock, 2)paper or 3)scissors"
    )
  );

  if (choice === 1) {
    choice = "rock";
  } else if (choice === 2) {
    choice = "paper";
  } else if (choice === 3) {
    choice = "scissors";
  }

  return choice;
}
