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

console.log(getComputerChoice());