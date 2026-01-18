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
console.log("Computer has made its choice, make yours now!");

function getHumanChoice() {
    let humanChoice = prompt("(R)ock, (P)aper, (S)cissors? (R,P,S)?");
    if (humanChoice.toLowerCase() === "r" ) {
        return "rock";
    } else if (humanChoice.toLowerCase() === "p") {
        return "paper";
    } else if (humanChoice.toLowerCase() === "s") { 
        return "scissors";
    } else {
        return "invalid entry, please try again";
    }
}

console.log("You chose " + getHumanChoice());


