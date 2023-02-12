function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    }
    if (choice === 1) {
        return "Paper";
    }
    if (choice === 2) {
        return "Scissors";
    }
}

function getPlayerChoice () {    
    while (true) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        switch (playerChoice.toLowerCase()) {
            case "rock":
                return "Rock";
            case "paper":
                return "Paper";
            case "scissors":
                return "Scissors";
            default:
                alert("Invalid choice, please try again.")
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return "Tie! Both chose Rock";
        }
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        }
        if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        }
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        }
        if (computerSelection === "Paper") {
            return "Tie! Both chose Paper";
        }
        if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper";
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        }
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        }
        if (computerSelection === "Scissors") {
            return "Tie! Both chose Scissors";
        }
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        alert(result);
        if (result.charAt(4) === "W") {
            playerScore++;
        } else if (result.charAt(4) === "L") {
            compScore++;
        }
    }
    displayWinner(playerScore, compScore);
}

function displayWinner(playerScore, compScore) {
    let alertMsg;
    if (playerScore > compScore) {
        alertMsg ="Player Won!";
    } else if (compScore > playerScore) {
        alertMsg = "Computer Won!";
    } else {
        alertMsg = "Game ended in a tie.";
    }
    alert(alertMsg +  ` Player score: ${playerScore}, Computer Score: ${compScore}`);
}