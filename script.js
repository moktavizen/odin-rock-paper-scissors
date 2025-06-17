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

  function playRound(humanChoice, computerChoice) {
    function capitalize(str) {
      return `${str.at(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
    }

    const human = capitalize(humanChoice);
    const computer = capitalize(computerChoice);
    let roundMsg;

    if (human === computer) {
      roundMsg = `Draw! Both chose ${human}`;
    } else if (
      (human === "Rock" && computer === "Scissors") ||
      (human === "Paper" && computer === "Rock") ||
      (human === "Scissors" && computer === "Paper")
    ) {
      humanScore++;
      roundMsg = `You win! ${human} beats ${computer}`;
    } else if (
      (computer === "Rock" && human === "Scissors") ||
      (computer === "Paper" && human === "Rock") ||
      (computer === "Scissors" && human === "Paper")
    ) {
      computerScore++;
      roundMsg = `You Lose! ${computer} beats ${human}`;
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
