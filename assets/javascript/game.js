var sitcoms = ['Fresh Prince', 'Martin', 'In Living Color', 'A Different World', 'Living Single',
                'Family Matters', 'Sister, Sister', 'Moesha', 'The Wayans Bros', 'Kenan & Kel'];

var randomWord = Math.floor(Math.random()*sitcoms.length);	
var rightGuess = sitcoms[randomWord];
var rGuess = rightGuess.toLowerCase();
var guessRemaining = 20;
console.log(guessRemaining);
console.log(rightGuess);

var lettersGuessed = [];

var answerArray = [];
for (var i = 0; i < rGuess.length; i++) {
answerArray[i] = "_";
}

function playerGuess (input) {
    var key = event.key;
    var remainingLetters = rGuess.length;
    var letterList= document.querySelector('#lettersGuessed');
    letterList.innerText += ` ${key}, `;
    document.querySelector("#guessR").innerText = guessRemaining;

    
    document.querySelector("#rGuess").innerText = answerArray;
    
    if (rGuess.indexOf(key) != -1) { 
        for (var i = 0; i < rightGuess.length; i ++) { 
            if (rGuess[i] == key) { 
            guessRemaining--;
            var x = answerArray.join("");
            document.querySelector("#rGuess").innerText = x;
            console.log("array =>", answerArray)
            answerArray[i] = key;

            } 
        }
        document.querySelector("#rGuess").innerText = answerArray.join(" ");
    } else { 
            guessRemaining--;

    }   

    if (guessRemaining == 0) {
        guessRemaining = 20;
        rightGuess = sitcoms[Math.floor(Math.random()*sitcoms.length)];
        letterList.innerText =  ` `;
        rGuess = rightGuess.toLowerCase();
    }
               
}

document.onkeyup = playerGuess;