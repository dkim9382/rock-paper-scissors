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

function getPlayerChoice(e) {   
    console.log(this);
    // while (true) {
    //     let playerChoice = prompt("Rock, Paper, or Scissors?");
    //     switch (playerChoice.toLowerCase()) {
    //         case "rock":
    //             return "Rock";
    //         case "paper":
    //             return "Paper";
    //         case "scissors":
    //             return "Scissors";
    //         default:
    //             alert("Invalid choice, please try again.")
    //     }
    // }
}

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === "Rock") {
//         if (computerSelection === "Rock") {
//             return "Tie! Both chose Rock";
//         }
//         if (computerSelection === "Paper") {
//             return "You Lose! Paper beats Rock";
//         }
//         if (computerSelection === "Scissors") {
//             return "You Win! Rock beats Scissors";
//         }
//     }
//     if (playerSelection === "Paper") {
//         if (computerSelection === "Rock") {
//             return "You Win! Paper beats Rock";
//         }
//         if (computerSelection === "Paper") {
//             return "Tie! Both chose Paper";
//         }
//         if (computerSelection === "Scissors") {
//             return "You Lose! Scissors beats Paper";
//         }
//     }
//     if (playerSelection === "Scissors") {
//         if (computerSelection === "Rock") {
//             return "You Lose! Rock beats Scissors";
//         }
//         if (computerSelection === "Paper") {
//             return "You Win! Scissors beats Paper";
//         }
//         if (computerSelection === "Scissors") {
//             return "Tie! Both chose Scissors";
//         }
//     }
// }

function playRound(e) {    
    const computerSelection = getComputerChoice();
    const playerSelection = this.id.charAt(0).toUpperCase() + this.id.slice(1);
    let alertMsg = "";
    
    if (playerSelection === computerSelection) {
        alertMsg = `Tie! Both chose ${playerSelection}`;
    }
    else if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Rock"
        ) {
        playerScore++;
        alertMsg = `You Win! ${playerSelection} beats ${computerSelection}`;        
    }
    else {
        compScore++;
        alertMsg = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    updateScore();
    console.log(playerScore + " : " + compScore);
    displayAlert(alertMsg);
    checkWinner();
}

function displayAlert(alertMsg) {
    const div = document.querySelector("#result");
    div.textContent = alertMsg;
}

function updateScore() {
    const div = document.querySelector("#score");
    div.textContent = `Player: ${playerScore}, Computer: ${compScore}`;
    console.log("         " + playerScore + " : " + compScore);
}

function game() {

    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => btn.addEventListener("click", playRound));

    // let playerScore = 0;
    // let compScore = 0;
    // while (playerScore < 5 && compScore < 5) {
    //     let result = playRound(getPlayerChoice(), getComputerChoice());
    //     alert(result);
    //     if (result.charAt(4) === "W") {
    //         playerScore++;
    //     } else if (result.charAt(4) === "L") {
    //         compScore++;
    //     }
    // }
    // displayWinner(playerScore, compScore);
}

function checkWinner () {
    if (playerScore >= 5 || compScore >= 5) {
        displayWinner();
        const buttons = document.querySelectorAll("button");
        buttons.forEach(btn => btn.removeEventListener("click", playRound));
    }
}

function displayWinner() {
    let alertMsg;
    if (playerScore > compScore) {
        alertMsg ="Player Won!";
    } else {
        alertMsg = "Computer Won!";
    }
    displayAlert("= = = " + alertMsg +  ` Player score: ${playerScore}, Computer Score: ${compScore}` + " = = =");
}


let playerScore = 0;
let compScore = 0;
game();

/*

1 - set up event listener for each button
2 - once player clicks a button, play one round:
        display result
        update score
        check if winner (someone scored 5)

*/