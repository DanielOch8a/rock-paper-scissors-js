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
