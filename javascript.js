function getComputerChoice(){
    let randomNumber = Math.random();

    if (randomNumber < 1/3){
        return "rock";
    }else if (randomNumber < 2/3){
        return "paper";
    }else {
        return "scissors";
    }
}

function getHumanChoice(){
    const playerSelection = window.prompt ("Let's play! You have to play for 5 times. \n Choose one rock, paper, or scissors: ");

    if (playerSelection === null){
       console.log ("Game Cancelled!");
       return null;

    }
    
    const choice = playerSelection.toLowerCase();
    
    if (
        playerSelection.toLocaleLowerCase() != "rock" &&
        playerSelection.toLocaleLowerCase() != "paper" &&
        playerSelection.toLocaleLowerCase() != "scissors"
    )
    {
        console.log ("Invalid Choice! Please choose among rock, paper, or scissors.");
        return null;
    }

    return choice;

}

function playGame(){

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){
     
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log ("You win! Rock beats scissors.");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log ("You win! Paper beats rock.");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log ("You win! Scissors beats paper.");
        humanScore++;
    }
    
    else if (computerChoice === "rock" && humanChoice === "scissors"){
        console.log ("You lose! Rock beats scissors");
        computerScore++;
    }
    else if (computerChoice === "paper" && humanChoice === "rock"){
        console.log ("You lose! Paper beats rock");
        computerScore++;
    } 
    else if (computerChoice === "scissors" && humanChoice === "paper"){
        console.log ("You lose! Scissors beats paper");
        computerScore++;
    }
    else {
        console.log ("It's a draw!");
    }

}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

console.log ("Final Score: ");
console.log ("Human Score: " + humanScore);
console.log ("Computer Score: " + computerScore);

if (humanScore > computerScore){
    console.log ("You win the game!");
}else if (computerScore > humanScore){
    console.log ("Computer wins the game!");
}else {
    console.log ("The game is draw!");
}
}
playGame();
