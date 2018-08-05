var Letter = require("./letter.js");

var Word = function(input) {
	this.letterArray = [];
	for (var i = 0; i < input.length; i++) {

        this.letterArray.push(new Letter(input[i]));
    }
	
    this.correctGuess = function() {
    	letters = "";
    	for(var i = 0; i < this.letterArray.length; i++) {
    		if(this.letterArray[i].guessed){
    			letters += this.letterArray[i].character + " ";
    		}else{
    			letters += "_ ";
    		}
       	}
       	console.log(letters + "\n");
    }

    this.userInput = function(userInput) {
    	for(var i = 0; i < this.letterArray.length; i++) {
    		this.letterArray[i].check(userInput);
    	}
    }
}

module.exports = Word;