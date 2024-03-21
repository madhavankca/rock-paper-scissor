const AVAILABLEMOVES = 3;
let moveChoice = ['rock','paper','scissor'];
function getComputerChoice(){
    let computerMove = Math.floor(Math.random()*AVAILABLEMOVES);
    console.log("Computer choice = " + moveChoice[computerMove]);
    return moveChoice[computerMove];
}
playerSelection = prompt("Type your move (rock, paper, scissor)").toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playgame(playerSelection, computerSelection);
    alert(result);

function playgame(playerSelection, computerSelection) {
     console.log("Player choice = " + playerSelection);
     if(playerSelection == computerSelection) return("It's a Tie");
     else if((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper'))
        return("Player wins! "+ playerSelection+ " beats "+ computerSelection);
    else{
     return("Computer wins! "+ computerSelection+ " beats "+ playerSelection);
    }
}
