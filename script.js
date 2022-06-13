let myArray = [
    'Rock',
    'Paper',
    'Scissors'
];

function testFunction(){
    alert("Lesss goooo");
}


function playRound() {

    /* Only part of this game that I had to google for.
    Didn't know how to randomly choose from array. */
    let computerGuess = myArray[Math.floor(Math.random() * myArray.length)];
    let userGuess = prompt("Choose from 'Rock', 'Paper' or 'Scissors'.");

    if (computerGuess == 'Rock') {

        if (userGuess.toLowerCase() == 'rock') {
            console.log(`It's a tie! You choose ${userGuess} while PC choose ${computerGuess}.`)
        }

        else if (userGuess.toLowerCase() == 'scissors') {
            console.log(`You lost! You choose ${userGuess} while PC choose ${computerGuess}.`)
        }

        else {
            console.log(`You won! You choose ${userGuess} while PC choose ${computerGuess}.`)
        }
    }

    else if (computerGuess == 'Paper') {

        if (userGuess.toLowerCase() == 'paper') {
            console.log(`It's a tie! You choose ${userGuess} while PC choose ${computerGuess}.`)
        }

        else if (userGuess.toLowerCase() == 'scissors') {
            console.log(`You won! You choose ${userGuess} while PC choose ${computerGuess}.`)
        }

        else {
            console.log(`You lost! You choose ${userGuess} while PC choose ${computerGuess}.`)
        }
    }

    else {
        if (userGuess.toLowerCase() == 'paper') {

            console.log(`You lost! You choose ${userGuess} while PC choose ${computerGuess}.`)
        }

        else if (userGuess.toLowerCase() == 'scissors') {
            console.log(`It's a tie! You choose ${userGuess} while PC choose ${computerGuess}.`)
        }

        else {
            console.log(`You won! You choose ${userGuess} while PC choose ${computerGuess}.`)
        }
    }


}

function game() {
    for (let i = 0; i < 5; i++){
        playRound()
    }
}
