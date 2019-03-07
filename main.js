// function yourGuess() {
//     guess = document.getElementById("guess").value;
//     guesses = document.getElementById("output");

let correctAnswer = 0;
let numberOfGuesses = 0;

function writeMessage(elementId, message, appendMessage) {
	let elemToUpdate = document.getElementById(elementId);
	if (appendMessage) {
		elemToUpdate.innerHTML = elemToUpdate.innerHTML + message;
	} else {
		elemToUpdate.innerHTML = message;
	}
};

function newGame() {
	correctAnswer = Math.floor(Math.random() * 100) + 1;
	numberOfGuesses = 0;
	writeMessage("guesslist", '');
}

function guessInRange(a) {
	return (a > 0 && a < 101);
}

function userNewGuess() {
	let userGuess = document.getElementById("guess").value;
	let status = document.getElementById("status");
    let history = document.getElementById("guesslist");
    
	if (userGuess.length == 0 || ! guessInRange(userGuess)) {
        // GAME START
        writeMessage("status", "<p>Please enter a number between 1-100 and press the Check button.</p>");
	} else if (userGuess.indexOf('.') != -1) {
		writeMessage("status", "<p>Please enter a whole number 1-100 and press the Check button.</p>");
	} else {
        numberOfGuesses++;
    
        // WINNER
    if (userGuess == correctAnswer) {
        writeMessage("status", "<p>You got me in " + numberOfGuesses +" guesses, I was thinking " + correctAnswer + ". Let\'s do it again...</p>");
        newGame();
    } else if (userGuess < correctAnswer) {
        // GUESS HIGHER
        writeMessage("status", "<p>You need to guess higher than " + userGuess + ", try again...</p>");
        writeMessage("history", "<li>" + userGuess +" (too low)</li>", true);
    } else {
        // GUESS LOWER
        writeMessage("status", "<p>You need to guess lower than " + userGuess + ", try again...</p>");
        writeMessage("history", "<li>" + userGuess +" (too high)</li>", true);
    }
    }

    document.getElementById("guess").value = '';	
}

window.onload = function() {
	newGame();
	document.getElementById("button").addEventListener('click', userNewGuess);
};



