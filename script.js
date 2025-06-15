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
      showScore("Draw! Both chose Rock", playerScore, computerScore);
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      showScore("You lose! Paper beats Rock", playerScore, computerScore);
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      showScore("You win! Rock beats Scissors", playerScore, computerScore);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      showScore("You win! Paper beats Scissors", playerScore, computerScore);
    } else if (playerChoice === "paper" && computerChoice === "paper") {
      showScore("Draw! Both chose Paper ", playerScore, computerScore);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      showScore("You lose! Scissors beats Paper ", playerScore, computerScore);
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      showScore("You lose! Rock beats Scissors ", playerScore, computerScore);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      showScore("You win! Scissors beats Paper ", playerScore, computerScore);
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
      showScore("Draw! Both chose Scissors ", playerScore, computerScore);
    } else {
      showScore("Error! Invalid match ", playerScore, computerScore);
    }
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
