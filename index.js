let moveChoice = ['rock','paper','scissor'];
function getComputerChoice(){
    let computerMove = (Math.floor(Math.random()*3));
    console.log(moveChoice[computerMove]);
}
getComputerChoice();
