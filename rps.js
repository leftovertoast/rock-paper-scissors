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

console.log("Welcome to Rock, Paper, Scissors!");
let computerChoice = getComputerChoice();
//console.log("Computer has made its choice, make yours now!");

function getHumanChoice() {
    let humanChoice2 = prompt("(R)ock, (P)aper, (S)cissors? (R,P,S)?");
    if (humanChoice2.toLowerCase() === "r" ) {
        return "rock";
    } else if (humanChoice2.toLowerCase() === "p") {
        return "paper";
    } else if (humanChoice2.toLowerCase() === "s") { 
        return "scissors";
    } else {
        return "invalid entry, please try again";
    }
}

// console.log("You chose " + getHumanChoice());

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
//console.log(humanScore);
//console.log(computerScore);
console.log(humanChoice);
console.log(computerChoice);
function playRound(humanChoice, computerChoice){
    
    if (humanChoice === computerChoice) {
        console.log("Draw!");
        ++humanScore;
        ++computerScore;
    }

};

playRound(humanChoice, computerChoice);
console.log(humanScore);
console.log(computerScore);