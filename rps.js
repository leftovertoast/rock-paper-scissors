console.log("Welcome to Rock, Paper, Scissors!");

function getComputerChoice() {
   outcome = Math.floor(Math.random() * 3);
   if (outcome === 0) {
    return "Rock";
   }
   else if (outcome === 1) {
    return "Paper";
   }
   else if (outcome === 2) {
    return "Scissors"
   };
};
/*
function getHumanChoice() {
    let humanChoice2 = prompt("(R)ock, (P)aper, (S)cissors? (R,P,S)?");
    if (humanChoice2.toLowerCase() === "r" || humanChoice2.toLowerCase() === "rock") {
        return "rock";
    } else if (humanChoice2.toLowerCase() === "p" || humanChoice2.toLowerCase() === "paper") {
        return "paper";
    } else if (humanChoice2.toLowerCase() === "s" || humanChoice2.toLowerCase() === "scissors") { 
        return "scissors";
    } else {
        return "invalid entry, please try again";
    }
}
*/ 
let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;


function playRound(humanChoice, computerChoice){
    console.log("Round number: " + (roundNumber));
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) {
        return "Draw, no points awarded";        
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        ++humanScore;
        return  "You win! Rock beats Scissors!";
        
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        ++humanScore;
        return "You win! Paper beats rock!";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        ++humanScore;
        return "You win! Scissors beats Paper!";
        
    } else {
        ++computerScore;
        return "Computer wins! " + computerChoice + " beats " + humanChoice;        
    } 
   ;
};

/* function playGame() {
    while (roundNumber < 6){
        playRound(getHumanChoice(), getComputerChoice());
    };
    if (humanScore > computerScore) {
        console.log("You Win!!!");
    } else if (humanScore === computerScore) {
        console.log("Tie!!! Try again!");
    } else { 
            console.log("You Lose!!! Better luck next time!");
    };
    console.log("Final Score: ");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
};
*/ 


let resultContainer = document.getElementById("results");

let humanScoreElement = document.createElement("p");
let computerScoreElement = document.createElement("p");
let currentRoundElement = document.createElement("p");
let roundResultElement = document.createElement("p");

        
        
// playGame();
//Below only works after the page has loaded, i.e. requires "defer" added to script tag in <HEAD>

let playerSelection = document.querySelectorAll("button");

let playerChoice = playerSelection.forEach((item) => {
    item.addEventListener('click', () => {
        
        let roundResult = playRound(item.id, getComputerChoice());
        humanScoreElement.textContent = "Your Score: " + humanScore;
        computerScoreElement.textContent = "Computer Score: " + computerScore;
        currentRoundElement.textContent = "Rounds played: " + (roundNumber) + "/5";
        roundResultElement.textContent = roundResult;
        
        resultContainer.appendChild(roundResultElement);
        resultContainer.appendChild(humanScoreElement);
        resultContainer.appendChild(computerScoreElement);
        resultContainer.appendChild(currentRoundElement); 
        roundNumber++; 
        gameOverCheck();   
    });
});

function gameOverCheck() {
    if (roundNumber === 6) {
        myButtons = document.getElementById("myButtons");
        document.body.removeChild(myButtons);
        resultContainer.removeChild(roundResultElement);
        humanScoreElement.textContent = "GAME OVER!"
        humanScoreElement.style.textAlign = "center";
        computerScoreElement.style.textAlign = "center";
        currentRoundElement.style.textAlign = "center";
        computerScoreElement.textContent = "FINAL SCORE: " + humanScore + " VS " + computerScore;
        if (humanScore > computerScore){
            currentRoundElement.textContent = "Congratulations, YOU WON!!!";
        } else {
            currentRoundElement.textContent = "Try Again!";
        };      
};
};
