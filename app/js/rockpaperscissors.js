////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
playToFive();
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

function getPlayerMove(move) {
    return (move || getInput());
}

function getComputerMove(move) {
    return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {
    if (playerMove === computerMove) {
        return "tie";
    }
    if (playerMove === "rock") {
        if ( computerMove === "paper") {
            return "computer";
        } else {
            return "player";
        }
    }
    if (playerMove === "paper") {
        if (computerMove === "rock") {
            return "player";
        } else {
            return "computer";
        }
    }    
    if (playerMove === "scissors") {
        if (computerMove === "rock") {
            return "computer";
        } else {
            return "player";
        }
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var gameNotWon = true;
    while (gameNotWon) {
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        
        if (winner == "player"){
            console.log("Player played '" + playerMove + "' and Computer played '" + computerMove + "', the winner is Player!");
            playerWins++;
        }
        else if (winner == "computer"){
            console.log("Player played '" + playerMove + "' and Computer played '" + computerMove + "', the winner is Computer!");
            computerWins ++;
        }
          else if (winner == "tie"){
            console.log("Player played '" + playerMove + "' and Computer played '" + computerMove + "', it's a tie!");
        }
        if (playerWins >= 5 || computerWins >= 5){
            gameNotWon = false;
        }
    }
  return [playerWins, computerWins];
}