function computerPlay() {
  let choice = Math.floor(Math.random() * 9) + 1;

  switch (choice) {
    case 1:
    case 2:
    case 3:
      choice = "Rock";
      break;
    case 4:
    case 5:
    case 6:
      choice = "Paper";
      break;
    case 7:
    case 8:
    case 9:
      choice = "Scissors";
      break;
    default:
      return "ERROR! Something caused the default to be hit!";
  }

  return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        alert("You win! Rock beats Scissors!");
        break;
      } else if (computerSelection === "paper") {
        alert("You lose! Paper beats rock!");
        break;
      } else {
        alert("Tied! Rock ties Rock!");
      }
      break;
    case "paper":
      if (computerSelection === "scissors") {
        alert("You lose! Scissors beats Paper!");
        break;
      } else if (computerSelection === "rock") {
        alert("You win! Paper beats rock!");
        break;
      } else {
        alert("Tied! Paper ties Paper!");
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        alert("You lose! Rock beats Scissors!");
        break;
      } else if (computerSelection === "paper") {
        alert("You win! Scissors beats Paper!");
        break;
      } else {
        alert("Tied! Scissors ties Scissors!");
      }
      break;
    default:
      alert("ERROR! Unknown entry!");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors");
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
  }
}
