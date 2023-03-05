
// global variable declarations
let playerSelection;
let computerSelection;
let gameResult = 0;
let playerScore = 0;
let computerScore = 0;
let tie = 0;
let invalid = 0;
const scorePad = document.querySelector('.results'); 

const fiveTotal = document.createElement('div');
const resultDiv = document.createElement('div');

// generate random computer input variables with a function
const getComputerChoice = function() {

    let randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) {
        let result = "rock";
        // console.log(result);
        return result;
    } else if 
        (randomNumber === 2) {
            let result = "paper";
            // console.log(result);
            return result;
        } else if 
            (randomNumber === 3) {
                let result = "scissors";
                // console.log(result);
                return result;
            } else {
                let result = "error";
                // console.log(result);
                return result;
            };
};

// determine outcome variables with a function
     let playRound = function(playerSelection, computerSelection) {
       
        if (playerSelection === computerSelection) {
            let message = "tie";
            // console.log(message);
            // alert(message);
            return message;
        } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
            let message = "winner";
            // console.log(message);
            // alert(message);
            return message;
        } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors") {
            let message = "loser";
            // console.log(message);
            // alert(message);
            return message;
        } else if (playerSelection !== "rock" || "paper" || "scissors") {
            let message = "invalid selection";
            // console.log(message);
            // alert(message);
            return message;
        };
    };
     
    // create and log variables noting results with a function
    
    const game = function() {
       
    computerSelection = getComputerChoice();
    gameResult = playRound(playerSelection, computerSelection);

    if (gameResult === "winner") {
        playerScore++;
        resultDiv.textContent =`Your Score: ${playerScore} ... Computer chose ${computerSelection}.`;
        scorePad.append(resultDiv);
               
    }  else if (gameResult === "loser") {
        computerScore++;
        resultDiv.textContent = `Computer Score: ${computerScore}  ... Computer chose ${computerSelection}.`;
        scorePad.append(resultDiv);
        
    }  else if (gameResult === "tie") {
        tie++;
        resultDiv.textContent = `Ties: ${tie} ... Computer chose ${computerSelection}.`;
        scorePad.append(resultDiv);
        
    } else if (gameResult === "invalid selection" || null) {
        invalid++;
        resultDiv.textContent = `Invalids: ${invalid}`;
        scorePad.append(resultDiv);
        
    } else {
    

}; 

checkScore();

    }; 

// function to reset score variables

const resetScore = function() {
gameResult = 0;
playerScore = 0;
computerScore = 0;
tie = 0;
invalid = 0;
};

// function to check if score equals five

checkScore = function() {
    if (playerScore === 5) {
        fiveTotal.textContent = 'You won 5 games.';
        scorePad.removeChild(resultDiv);
        scorePad.append(fiveTotal);
    } else if (computerScore === 5) {
        fiveTotal.textContent = 'The computer won 5 games.';
        scorePad.removeChild(resultDiv);
        scorePad.append(fiveTotal);
    } else {
        fiveTotal.textContent = 'Keep playing until 5 wins.';
        scorePad.append(fiveTotal);
    };
};

// event listeners

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
    playerSelection = "rock";
    game();
    
   
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
    playerSelection = "paper";
    game();

});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
    playerSelection = "scissors";
    game();
    
});

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    resetScore();
    resultDiv.textContent =`Scores have been reset.`;
    scorePad.appendChild(resultDiv);
});





 


