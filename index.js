const AVAILABLEMOVES = 3;
const TOTALROUNDS = 5;

let moveChoice = ['rock','paper','scissor'];

function getComputerChoice(){
    let computerMove = Math.floor(Math.random()*AVAILABLEMOVES);
    return moveChoice[computerMove];
}

let result = 0;
for(let round = 1 ; round <= TOTALROUNDS; round++){
     alert("Round :" + round);
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Type your move (rock, paper, scissor)").toLowerCase();

     result += playRound(playerSelection,computerSelection);
}

if(result > 0)
    alert("Player wins the tournament");
else if(result < 0)
    alert("Computer wins the tournament");
else
    alert("The Tournament is tied");

function playRound(playerSelection, computerSelection) {
     if(playerSelection == computerSelection){
        alert("It's a Tie");
        return 0;
     }
     else if((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')){
        alert("Player wins! "+ playerSelection+ " beats "+ computerSelection);
        return 1;
     }
    else{
     alert("Computer wins! "+ computerSelection+ " beats "+ playerSelection);
     return -1;
    }
}
