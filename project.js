let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompch = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const Drawgame = () => {
    console.log("The game was a draw.");
    msg.innerText = "Game was a draw. Play again!";
};

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You lose.");
        msg.innerText = `You lose. Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    console.log(`User Score: ${userscore}, Computer Score: ${compscore}`);
};

const playgame = (userChoice) => {
    console.log("User Choice:", userChoice);

    // Generate computer choice
    const compChoice = gencompch();
    console.log("Computer Choice:", compChoice);

    if (userChoice === compChoice) {
        // Draw game
        Drawgame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            // User wins against scissors, loses against paper
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // User wins against rock, loses against scissors
            userwin = compChoice === "scissors" ? false : true;
        } else {
            // User wins against paper, loses against rock
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);  // Pass the correct arguments
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log("Choice was clicked");
        const userChoice = choice.querySelector("img").getAttribute("id");
        playgame(userChoice);
    });
});
