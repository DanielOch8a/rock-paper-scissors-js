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
