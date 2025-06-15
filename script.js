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

  // Input  : human and computer choice
  // Output : logs a winner announcement
  //
  // Normalize the inputs
  // If human rock and computer rock, draw, no increment
  // If human rock and computer paper, computer wins, increment computer
  // If human rock and computer scissors, human wins, increment human
  // If human paper and computer rock, human wins, increment human
  // If human paper and computer paper, draw, no increment
  // If human paper and computer scissors, computer wins, increment computer
  // If human scissors and computer rock, computer wins, increment computer
  // If human scissors and computer paper, human wins, increment human
  // If human scissors and computer scissors, draw, no increment

  function playRound(humanChoice, computerChoice) {
    const playerChoice = humanChoice.toLowerCase();

    if (playerChoice === "rock" && computerChoice === "rock") {
      console.log(
        `Draw! Both chose Rock
Player 1: ${humanScore}
COM: ${computerScore}`,
      );
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log(
        `You lose! Paper beats Rock
Player 1: ${humanScore}
COM: ${computerScore}`,
      );
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log(
        `You win! Rock beats Scissors
Player 1: ${humanScore}
COM: ${computerScore}`,
      );
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log(
        `You win! Paper beats Scissors
Player 1: ${humanScore}
COM: ${computerScore}`,
      );
    } else if (playerChoice === "paper" && computerChoice === "paper") {
      console.log(
        `Draw! Both chose Paper
Player 1: ${humanScore}
COM: ${computerScore}`,
      );
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log(
        `You lose! Scissors beats Paper
Player 1: ${humanScore}
COM: ${computerScore}`,
      );
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log(
        `You lose! Rock beats Scissors
Player 1: ${humanScore}
COM: ${computerScore}`,
      );
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log(
        `You win! Scissors beats Paper
Player 1: ${humanScore}
COM: ${computerScore}`,
      );
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
      console.log(
        `Draw! Both chose Scissors
Player 1: ${humanScore}
COM: ${computerScore}`,
      );
    } else {
      console.log(
        `Error! Invalid match
Player 1: ${humanScore}
COM: ${computerScore}`,
      );
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  let winner;

  if (humanScore > computerScore) {
    winner = "Human";
  } else if (humanScore < computerScore) {
    winner = "Computer";
  } else {
    winner = "Draw! No winner!";
  }

  console.log(
    `The winner is ${winner}!
Player 1: ${humanScore}
COM: ${computerScore}`,
  );
}

playGame();
