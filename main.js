// In the branch "experimental" I will add features to allow the game to be played w/o opening the console.
console.log("Let's play Rock, Paper, Scissors");
console.log("Please choose r, p or s");
/* The variables below have global scope because they are needed in multiple functions. The variables myPick and halsPick will hold our respective picks of r, p or s. the gamesWon/Tied/Lost variables will keep a running count of the user's wins, ties and losses.*/
let myPick;
let halsPick;
let gamesWon = 0;
let gamesLost = 0;
let gamesTied = 0;
/* The event listeners below are based on which key is pressed allowing user to pick r, p, or s to play the game. Any other key will result in an invalid key statement followed by a statement asking the user to pick a valid letter. The "return" at the end of the EventListener ensures the rest of the program will not run if an errant key is chosen. */ 
document.addEventListener("keyup", function(event) {
    if(event.keyCode === 82) {
        myPick = "r";
        console.log('You chose rock!')
    }
    else if(event.keyCode === 80) {
        myPick = "p";
        console.log('You chose paper!')
    }
    else if(event.keyCode === 83) {
        myPick = "s";
        console.log('You chose scissors!')
    }
    else {
        console.log("You chose an invalid key!");
        console.log("Please choose r, p or s");
        return;
    }
    /* Once a valid key is chosen the compPick funtion is run to have the computer pick r, p or s randomly, followed by the whoWins function which lets the user know who won. The running tally of games won, tied and lost is also in the whoWins function. */ 
    compPick();
    whoWins();
})
/* The compPick function uses Math.random and Math.floor to generate a random integer between 0 and 2 (inclusive) and then designates halsPick as an "r" for 0, a "p" for 1 and an "s" for 2 and lets the user know what the computer chose. */
function compPick() {
    let compRandom = Math.floor(Math.random() * 3);
    if(compRandom === 0) {
        halsPick = "r";
        console.log('Hal, the computer, chose rock!');
    }
    else if(compRandom === 1) {
        halsPick = "p";
        console.log('Hal, the computer, chose paper!');
    }
    else if(compRandom === 2) {
        halsPick = "s";
        console.log('Hal, the computer, chose scissors!');
    }
    /* The function whoWins first uses a switch statement. The parameter of the switch statement is a concatenation of the halsPick and myPick variables. There are nine possible combinations, 3 each resulting in a tie, win or loss for the user. console.log is used to notify the user of the result and the appropriate counter is incremented before the break which exits the function. */
}
function whoWins() {
    switch(halsPick + myPick) {
    case "rr" :
    case "ss" :
    case "pp" :
        console.log('This round was a tie. Please choose again.');
        gamesTied++;
        break;
    case "sr" :
    case "rp" :
    case "ps" :
        console.log('You won this round!');
        gamesWon++;
        break;
    case "sp" :
    case "rs" :
    case "pr" :
        console.log('Hal won this round!');
        gamesLost++;
        break;
    default :
        
    }
    /* The wins, ties and losses variables are needed to determine when there is exactly one of any of these as that affects the grammar of the notification to the user of the running total (ie it would be 1 win but 0 or 2 wins). A conditional strictly = operator is used to test when each variable is exactly equal to 1. When any of these categories is not equal to 1 an s is interpolated onto the word game for proper grammar. Since these variables are only needed within the whoWins function they are given local scope. The running tally of wins, ties and losses is given to the user in a console.log statement at the end of the whoWins function. */
    let wins;
    let ties;
    let losses;
    if (gamesWon === 1) {
        wins = "";
    } else {
        wins = "s"
    }
    if (gamesTied === 1) {
        ties = "";
    } else {
        ties = "s"
    }
    if (gamesLost === 1) {
        losses = "";
    } else {
        losses = "s"
    }

    console.log(`You have won ${gamesWon} game${wins}, tied ${gamesTied} game${ties} and lost ${gamesLost} game${losses}.`);
}
