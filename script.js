// UI     : -
// Input  : -
// Output : random string rock, paper, or scissors
//
// Get random number from 1 to 3
// If 1 returns rock
// If 2 returns paper
// If 3 returns scissors
function getComputerChoice() {
  const choiceId = Math.floor(Math.random() * 3) + 1;

  switch (choiceId) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

// UI     : Browser prompt
// Input  : string rock, paper, or scissors
// Output : string rock, paper, or scissors
//
// Get text input from user
// Return the input
function getHumanChoice() {
  return prompt("Enter your choice! (Rock, Paper, or Scissors)");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);
    // console.log("You lose! Paper beats Rock");
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
}

playGame();
