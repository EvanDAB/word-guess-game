var sitcoms = ['Fresh Prince', 'Martin', 'In Living Color', 'A Different World', 'Living Single',
                'Family Matters', 'Sister, Sister', 'Moesha', 'The Wayans Bros', 'Kenan & Kel'];

var randomWord = Math.floor(Math.random()*sitcoms.length);	
var rightGuess = sitcoms[randomWord];
var rGuess = rightGuess.toLowerCase();
var guessRemaining = 20;
console.log(guessRemaining);

console.log(rightGuess);

// this is the basic format for how the game will work
function playerGuess (input) {
    var key = event.key;
    var remainingLetters = rGuess.length;
    var letterList= document.querySelector('#lettersGuessed');
    letterList.innerText = letterList.innerText + ` ${key}, `;
    document.querySelector("#guessR").innerText = guessRemaining;

    var lettersGuessed = [];

    var answerArray = [];
    for (var i = 0; i < rGuess.length; i++) {
    answerArray[i] = "_";
    }
    document.querySelector("#rGuess").innerText = answerArray;
    
    if (rGuess.indexOf(key) != -1) { // if the character is found
        for (var i = 0; i < rightGuess.length; i ++) { // loop on all characters
            if (rGuess[i] == key) { 
            guessRemaining--;
            // hangman fills out but it does not keep going
            document.querySelector("#rGuess").innerText = answerArray.join(``);
            answerArray[i] = key;
            } 
        }
    } else { 
            //alert('naw');
            // all of my 'no' conditions should be here
            guessRemaining--;

    }   

    if (guessRemaining == 0) {
        //loss
        guessRemaining = 20;
        rightGuess = sitcoms[Math.floor(Math.random()*sitcoms.length)];
        letterList.innerText =  ` `;
        rGuess = rightGuess.toLowerCase();
    }
               
}

document.onkeyup = playerGuess;