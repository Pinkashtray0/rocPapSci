// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// 
function getComputerChoice() {
    let computerChoice;
    return Math.trunc(Math.random() * 3);
    }


console.log(getComputerChoice());