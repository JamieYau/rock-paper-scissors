let playerScore = 0;
let compScore = 0;
const player = document.querySelector("#player_score");
const computer = document.querySelector("#comp_score");

const weapons = {
  Rock: { losesTo: "Paper", beats: "Scissors" },
  Paper: { losesTo: "Scissors", beats: "Rock" },
  Scissors: { losesTo: "Rock", beats: "Paper" },
};

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let selection = Object.keys(weapons)[random];
  return selection;
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.substring(1);
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (weapons[playerSelection].beats === computerSelection) {
    playerScore++;
    return "You Won! " + playerSelection + " beats " + computerSelection;
  } else if (weapons[playerSelection].losesTo === computerSelection) {
    compScore++;
    return "You Lost! " + playerSelection + " loses to " + computerSelection;
  }
}

function displayScore() {
  player.textContent = playerScore;
  computer.textContent = compScore;
}

function checkWinner() {
  if (compScore === 5) alert("You Lost!");
  if (playerScore === 5) alert("You Won!");
  else return;
}

function clicked(e) {
  const result = document.querySelector("#result");
  result.textContent = playRound(e.target.id, getComputerChoice());
  displayScore();
  checkWinner();
}

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach((button) => button.addEventListener("click", clicked));
