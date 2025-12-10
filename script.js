const playGame = () => {
  const getComputerChoice = () => {
    const choiceId = Math.floor(Math.random() * 3) + 1;

    switch (choiceId) {
      case 1:
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissors";
    }
  };

  let playerScore = 0;
  let computerScore = 0;

  const playerScoreE = document.querySelector("#player-score");
  const computerScoreE = document.querySelector("#com-score");

  const playRound = (player, computer) => {
    const showScore = (message, playerScore, computerScore) => {
      const text = `${message}\n
Player: ${playerScore}
COM: ${computerScore}`;

      alert(text);
    };

    let roundMsg;

    if (player === computer) {
      roundMsg = `Draw!\nBoth chose ${player}`;
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      playerScore++;
      playerScoreE.textContent = playerScore;
      roundMsg = `Player win!\nPlayer chose ${player}, COM chose ${computer}`;
    } else if (
      (computer === "rock" && player === "scissors") ||
      (computer === "paper" && player === "rock") ||
      (computer === "scissors" && player === "paper")
    ) {
      computerScore++;
      computerScoreE.textContent = computerScore;
      roundMsg = `Computer win!\nCOM chose ${computer}, Player chose ${player}`;
    } else {
      roundMsg = "Error!\nInvalid match";
    }

    showScore(roundMsg, playerScore, computerScore);

    if (playerScore === 5 || computerScore === 5) {
      let winnerMsg;

      if (playerScore > computerScore) {
        winnerMsg = "The winner is player!";
      } else if (playerScore < computerScore) {
        winnerMsg = "The winner is Computer";
      } else {
        winnerMsg = "Draw! No winner!";
      }

      showScore(winnerMsg, playerScore, computerScore);

      playerScore = 0;
      computerScore = 0;
      playerScoreE.textContent = playerScore;
      computerScoreE.textContent = computerScore;
    }
  };

  const controlE = document.querySelector(".control");
  controlE.addEventListener("click", (ev) => {
    switch (ev.target.id) {
      case "rock": {
        const playerSelection = "rock";
        playRound(playerSelection, getComputerChoice());
        break;
      }
      case "paper": {
        const playerSelection = "paper";
        playRound(playerSelection, getComputerChoice());
        break;
      }
      case "scissors": {
        const playerSelection = "scissors";
        playRound(playerSelection, getComputerChoice());
        break;
      }
    }
  });
};

playGame();
