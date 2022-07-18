
/**
 * 1 = rock
 * 2 = paper
 * 3 = scissors
 * 
 * 
 * 
 * 
 * 
 * scissors > paper
 * paper > rock
 * rock > scissors
 * 
 */

let playerScore = 0;
let computerScore = 0;
let tie = 0;




let canvas = document.createElement('canvas');
let confetti = window.confetti.create(canvas, {resize: true, useWorker: true});
let confettiBoard = document.querySelector(".gameBoardInfo");
confettiBoard.append(canvas);


function computerPlay(){
    let computer = Math.floor(Math.random() * 3) + 1;
    return computer;
}

function findSign(num){
    if(num == 1){
        return "rock";
    }else if(num == 2 ){
        return "paper";
    }else if(num == 3){
        return "scissor";
    }else{
        return "not valid";
    }

}
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    tie = 0;

};

function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection);
    let winner = "tie";
    let computerChoice = findSign(computerSelection);
    let playerChoice = findSign(playerSelection);
    if((playerSelection == 1 && computerSelection == 3)){
        let string =  "player wins! " + playerChoice + " " + "beats " + computerChoice;
        playerScore++;
        return string;
    }else if((computerSelection == 1 && playerSelection == 3)){
        let string = "computer wins! " + computerChoice + " " + "beats " + playerChoice;
        computerScore++;
        return string;
    }else if(playerSelection > computerSelection){
        let string =  "player wins! " + playerChoice + " " + "beats " + computerChoice;
        playerScore++;
        return string;
    }else if(computerSelection > playerSelection){
        let string = "computer wins! " + computerChoice + " " + "beats " + playerChoice;
        computerScore++;
        return string;
    }else{
        tie+=1;
        winner = winner + " (" + tie + ")";
        return winner;
    }
}


function updateScore(winner){
    let playerS = document.querySelector('#player-score');
    let computerS = document.querySelector('#computer-score');
    const description = document.querySelector(".icon");
    
    if(playerScore == 5){
        

        winner = "player won the game!";
        resetGame();
        confetti({particleCount: 300, spread: 100});
    }else if(computerScore == 5){

        winner = "computer won the game!";
        resetGame();
        confetti({particleCount: 300, spread: 100});
    }


    description.textContent = winner;
    playerS.textContent = "🧍 : " + playerScore;
    computerS.textContent = "🖥️ : " + computerScore;
}

function play(e){
        let winner = playRound(e.path[1].getAttribute("data-choice"), computerPlay());
        updateScore(winner);
        
}

function init(){
    const arrayBtns = document.querySelectorAll("#button");
    arrayBtns.forEach(btn => btn.addEventListener('click', play));
}

init()