let playerScore = 0;
let compScore = 0;

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

function clicked(e) {
  const result = document.querySelector("#result");
  result.textContent = playRound(e.target.id, getComputerChoice());
  const player = document.querySelector("#player_score");
  const computer = document.querySelector("#comp_score");
  player.textContent = playerScore;
  computer.textContent = compScore;
}

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach((button) => button.addEventListener("click", clicked));
