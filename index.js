var Word = require("./word.js");
var inquirer = require("inquirer");

var wordList = ["retaliate", "shipwreck",
				"applesauce", "bubble",
				"shrink", "ovation",
				"zamboni", "continuum",
				"monitor", "cappella"];

var generateRandomWord = wordList[Math.floor(Math.random() * wordList.length)];

constructWord = new Word(generateRandomWord);

var characterGuessed = [];
var correctGuess = null;
var gameEnd = false;
var guessLeft = 11;

function gameStart(){
	generateRandomWord = wordList[Math.floor(Math.random() * wordList.length)];
	constructWord = new Word(generateRandomWord);
	console.log("\nStarting a new game!\n");
	
	characterGuessed = [];
	correctGuess = null;
	gameEnd = false;
	guessLeft = 11;
	game();
}

game();
	
	
function game(){

	inquirer.prompt([
		{
			name: "input",
			message: "Guess a letter! "
		}
	]).then(function(answers) {

		if(answers.input.length > 1 || !/^[a-zA-Z]+$/.test(answers.input) || answers.input === "") {
			console.log("\nPlease type a letter!\n");
			game();
		
		}else if(characterGuessed.includes(answers.input)) {
			console.log("\nLetter already guessed.\n");
			game();
		}
		else{
			correctGuess = false;
			var userGuess = answers.input;
			userGuess = userGuess.toLowerCase();
			characterGuessed.push(userGuess);

//checking userGuess matched with random words' letters in array of object

			constructWord.letterArray.forEach(function(i, v){

				if(userGuess === i.character){
					constructWord.letterArray[v].guessed = true;
					correctGuess = true;
				}
				//console.log(constructWord.letterArray[v]);
			});

			constructWord.correctGuess();
			if(correctGuess === false){
				console.log("Incorrect! Guess again!")
				guessLeft--;			
			}
			else{
				console.log("Correct!!!"); 
			}
			console.log("Guessed Letters: " + characterGuessed.join(" ") + "\n");
			console.log("Guesses Left: " + guessLeft + "\n");


			for(var i of constructWord.letterArray){
				if(i.guessed === false){
					gameEnd = false;
					break;
				}else{
					gameEnd = true;

				}
			}

			if(gameEnd === true || guessLeft === 0){
				if(guessLeft === 0){
					console.log("\nYou Lost!!\n");
				}else {
					console.log("\nYou Won!!\n");
				}
				gameStart();
				return;
			}

			game();


		}
		
	})
}
		
