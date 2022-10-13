let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerScore++;
    return `you Lose, ${computerSelection} beats ${playerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    return `You Win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "It's a tie";
  } else {
    return "invalid input. Try again";
  }
}

for (i = 1; i <= 3; i++) {
  let btn = document.createElement('button');

  if (i === 1) {
    btn.classList.add("rock");
  } else if (i === 2) {
    btn.classList.add("paper");
  } else {
    btn.classList.add("scissors");
  }

  document.querySelector('body').append(btn);
}

let button1 = document.querySelector('.rock')
let button2 = document.querySelector('.paper')
let button3 = document.querySelector('.scissors')

button1.textContent = 'Rock'
button2.textContent = 'Paper'
button3.textContent = 'Scissors'

let allButtons = document.querySelectorAll('button')

for (const btn of allButtons) {
  btn.addEventListener('click', (e) => {
    console.log(playRound(`${e.target.className}`, getComputerChoice()))

  })
}




// function game() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(
//       roundOfRPS(
//         prompt("please enter your choice of Rock, Paper, or Scissors"),
//         getComputerChoice()
//       )
//     );
//   }
//   if (playerScore > computerScore) {
//     return `congratulation you beat the CPU ${playerScore}-${computerScore}`;
//   } else if (playerScore < computerScore) {
//     return `Damn you lost to the CPU ${playerScore}-${computerScore}`;
//   } else {
//     return `You tied with the CPU ${playerScore}-${computerScore}`;
//   }
// }

// console.log(game());
