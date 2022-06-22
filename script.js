let pcStreak = 0;
let myStreak = 0;

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const userGuess = button.id;    

        const cOptions = ["Rock", "Paper", "Scissors"];
        const computerGuess = cOptions[Math.floor(Math.random() * 3)];

        playRound(userGuess, computerGuess);
    });

    function playRound(userGuess, computerGuess) {

        if (computerGuess == 'Rock') {

            if (userGuess.toLowerCase() == 'rock') {
                document.getElementById("55").innerHTML =(`It's a tie! You choose ${userGuess} while PC choose ${computerGuess}.`)
            }

            else if (userGuess.toLowerCase() == 'scissors') {
                document.getElementById("55").innerHTML =(`You lost! You choose ${userGuess} while PC choose ${computerGuess}.`)
                pcStreak++;
                document.getElementById("2").innerHTML = `PC: ${pcStreak}`;
            }

            else {
                document.getElementById("55").innerHTML =(`You won! You choose ${userGuess} while PC choose ${computerGuess}.`)
                myStreak++;
                document.getElementById("1").innerHTML = `Me: ${myStreak}`;
            }
        }

        else if (computerGuess == 'Paper') {

            if (userGuess.toLowerCase() == 'paper') {
                document.getElementById("55").innerHTML =(`It's a tie! You choose ${userGuess} while PC choose ${computerGuess}.`)
            }

            else if (userGuess.toLowerCase() == 'scissors') {
                document.getElementById("55").innerHTML =(`You won! You choose ${userGuess} while PC choose ${computerGuess}.`)
                myStreak++;
                document.getElementById("1").innerHTML = `Me: ${myStreak}`;
            }

            else {
                document.getElementById("55").innerHTML =(`You lost! You choose ${userGuess} while PC choose ${computerGuess}.`)
                pcStreak++;
                document.getElementById("2").innerHTML = `PC: ${pcStreak}`;
            }
        }

        else {
            if (userGuess.toLowerCase() == 'paper') {

                document.getElementById("55").innerHTML =(`You lost! You choose ${userGuess} while PC choose ${computerGuess}.`)
                pcStreak++;
                document.getElementById("2").innerHTML = `PC: ${pcStreak}`;
            }

            else if (userGuess.toLowerCase() == 'scissors') {
                document.getElementById("55").innerHTML =(`It's a tie! You choose ${userGuess} while PC choose ${computerGuess}.`)
            }

            else {
                document.getElementById("55").innerHTML =(`You won! You choose ${userGuess} while PC choose ${computerGuess}.`)
                myStreak++;
                document.getElementById("1").innerHTML = `Me: ${myStreak}`;

            };
        };
    };
});
