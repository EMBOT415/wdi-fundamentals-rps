////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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


// function to get player move    

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
        move || getInput();
}

//function to get computer move

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        move || randomPlay();
}



// function to determine winner by comparing player and computer

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    // YOUR CODE HERE 
 
    if (playerMove === 'rock' && computerMove === 'scissors'){
    winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper'){
    winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock'){
    winner = 'player';
    } else if (computerMove === 'rock' && playerMove === 'scissors'){
    winner = 'computer';
    } else if (computerMove === 'scissors' && playerMove === 'paper'){
    winner = 'computer';
    } else if (computerMove === 'paper' && playerMove === 'rock'){
    winner = 'computer';
    } else {
        winner = 'tie';
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    
    //to hold the count of wins
    var playerWins = 0;
    var computerWins = 0;
    
    //to pull in the functions
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    
    //to loop through until someone wins 5
    
    while (playerWins < 5 || computerWins <5){
        if (winner === 'player'){
            playerWins=+1;
            console.log("player chose " + playerMove + "while computer chose " + computerMove);
            console.log("player wins");
        } else (winner === 'computer'){
            computerWins+=1;
            console.log("player chose " + playerMove + "while computer chose " + computerMove);
            console.log('computer wins');
        return console.log('tie');
        }
    }

    return [playerWins, computerWins];
}

playToFive();
