function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    return "Rock";
  } else if (randomNum === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function roundOfRPS(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  console.log(playerSelection, computerSelection);
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    return `you Lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return `You Win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return `you Lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return `You Win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return `you Lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return `You Win, ${playerSelection} beats ${computerSelection}`;
  } else {
    return "It's a tie";
  }
}

console.log(roundOfRPS("Rock", getComputerChoice()));
