function playGame(userChoice) {
    var computerChoice = getComputerChoice();
    var result = determineWinner(userChoice, computerChoice);
    document.getElementById("result").innerHTML = result;
}

function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    }
}