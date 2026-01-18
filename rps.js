console.log("Welcome to Rock, Paper, Scissors!");

function getComputerChoice() {
   outcome = Math.floor(Math.random() * 3);
   if (outcome === 0) {
    return "rock";
   }
   else if (outcome === 1) {
    return "paper";
   }
   else if (outcome === 2) {
    return "scissors"
   }
}

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

function playRound(humanChoice, computerChoice){

    let computerChoice = getComputerChoice();
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = getHumanChoice();

    console.log(humanChoice);
    console.log(computerChoice);
    
    if (humanChoice === computerChoice) {
        console.log("Draw!");
        ++humanScore;
        ++computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper!");
        ++humanScore;
    } else {
        console.log("Computer wins! " + computerChoice + " beats " + humanChoice);
        ++computerScore;
    }

};

playRound(humanChoice, computerChoice);
console.log("Your score: " + humanScore);
console.log("Computer's Score: " + computerScore);