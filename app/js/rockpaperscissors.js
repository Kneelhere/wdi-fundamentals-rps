////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move != null) {
        return move;
    }
    else {
        return getInput();
    }
}

function getComputerMove(move) {
    if (move != null) {
        return move;
    }
    else {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = "tie";
    }
    else if (playerMove === "rock"){
        if (computerMove === "scissors") {
            winner = "player";
        }
        else if (computerMove === "paper"){
            winner = "computer";
        }
    }
    else if (playerMove === "paper"){
        if (computerMove === "scissors"){
            winner = "computer";
        }
        else if (computerMove === "rock"){
            winner = "player";
        }
    }
    else{
        if (computerMove === "paper") {
            winner = "player";
        }
        else if (computerMove === "rock") {
            winner = "computer";
        }
    }
    return winner;
}
//incredibly lost on how to make it run with a loop while keeping track of the score.
function playToFive(getwinner) {
    var playerWins = 0;
    var computerWins = 0;
    console.log("Let's play Rock, Paper, Scissors");
    /* YOUR CODE HERE */
    while (playerWins || computerWins < 5){
        getWinner(getPlayerMove(),getComputerMove());
        if (getwinner === "player") {
            playerWins++;
            console.log([playerWins, computerWins]);
        }
        if (getwinner === "computer") {
            computerWins++;
            console.log([playerWins, computerWins]);
        }
        if (getwinner === "tie") {
            console.log("tie");
        }
    }
}

playToFive();      
       
       