
// global variable declarations
let playerSelection;
let computerSelection;
let gameResult;
let fiveGameWinner;
let playerScore;
let computerScore;
let tie;
let invalid;
 
// functions
// obtain player input variable with a function
const getPlayerInput = function() {
let playerInput = prompt("Want to play rock, paper, scissors?", "Your Choice Here");
playerSelection = playerInput.toLowerCase();
console.log(playerSelection);
};

// generate random computer input variables with a function
const getComputerChoice = function() {

    let randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) {
        let result = "rock";
        console.log(result);
        return result;
    } else if 
        (randomNumber === 2) {
            let result = "paper";
            console.log(result);
            return result;
        } else if 
            (randomNumber === 3) {
                let result = "scissors";
                console.log(result);
                return result;
            } else {
                let result = "error";
                console.log(result);
                return result;
            };
};

// determine outcome variables with a function
     let playRound = function(playerSelection, computerSelection) {
        

       
        if (playerSelection === computerSelection) {
            let message = "tie";
            console.log(message);
            alert(message);
            return message;
        } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
            let message = "winner";
            console.log(message);
            alert(message);
            return message;
        } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors") {
            let message = "loser";
            console.log(message);
            alert(message);
            return message;
        } else if (playerSelection !== "rock" || "paper" || "scissors") {
            let message = "invalid selection";
            console.log(message);
            alert(message);
            return message;
        };
    };
     
    // create and log variables noting results with a function
    const game = function() {
    playerScore = 0;
    computerScore = 0; 
    invalid = 0;
    tie = 0;
    let i = 0;

    while (i < 5) {
    
    getPlayerInput();
    computerSelection = getComputerChoice();
    gameResult = playRound(playerSelection, computerSelection);

    if (gameResult === "winner") {
        playerScore++;
        i++;
    }  else if (gameResult === "loser") {
        computerScore++;
        i++;
    }  else if (gameResult === "tie") {
        tie++;
        continue;
    } else if (gameResult === "invalid selection" || null) {
        invalid++;
        continue;
    } else {
        continue;
    };

};  

    console.log(`Wins: ${playerScore}`);
    console.log(`Loses: ${computerScore}`);
    console.log(`Draws: ${tie}`);
    console.log(`Invalid Selections: ${invalid}`);
    console.log(`You won ${playerScore} out of five games.`);
    if (playerScore > computerScore) {
        console.log("You are the Five Game Winner!");
    } else {
        console.log("You are the Five Game LOOOSER!");
    };
};

// call function
game();

 


