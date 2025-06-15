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

  function showScore(message, playerScore, computerScore) {
    const text = `${message}
Player\t: ${playerScore}
COM\t: ${computerScore}`;

    console.log(text);
  }

  // Input  : human and computer choice
  // Output : show round winner
  //
  // Normalize the inputs
  // If draw, don't increment, set message
  // if win, increment human score, set message
  // if lose, increment computer score, set message
  // show message
  function playRound(humanChoice, computerChoice) {
    function capitalize(str) {
      return `${str.at(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
    }

    const stdHumanChoice = capitalize(humanChoice);
    const stdComputerChoice = capitalize(computerChoice);
    let roundMsg;

    if (stdHumanChoice === stdComputerChoice) {
      roundMsg = `Draw! Both chose ${stdHumanChoice}`;
    } else if (
      (stdHumanChoice === "Rock" && stdComputerChoice === "Scissors") ||
      (stdHumanChoice === "Paper" && stdComputerChoice === "Rock") ||
      (stdHumanChoice === "Scissors" && stdComputerChoice === "Paper")
    ) {
      humanScore++;
      roundMsg = `You win! ${stdHumanChoice} beats ${stdComputerChoice}`;
    } else if (
      (stdComputerChoice === "Rock" && stdHumanChoice === "Scissors") ||
      (stdComputerChoice === "Paper" && stdHumanChoice === "Rock") ||
      (stdComputerChoice === "Scissors" && stdHumanChoice === "Paper")
    ) {
      computerScore++;
      roundMsg = `You Lose! ${stdComputerChoice} beats ${stdHumanChoice}`;
    } else {
      roundMsg = "Error! Invalid match";
    }

    showScore(roundMsg, humanScore, computerScore);
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  let winnerMsg;

  if (humanScore > computerScore) {
    winnerMsg = "The winner is Human!";
  } else if (humanScore < computerScore) {
    winnerMsg = "The winner is Computer";
  } else {
    winnerMsg = "Draw! No winner!";
  }

  showScore(winnerMsg, humanScore, computerScore);
}

playGame();
