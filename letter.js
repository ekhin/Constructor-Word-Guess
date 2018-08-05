var Letter = function(character){
	this.character = character;
	this.guessed = false;
	
	this.check = function(newGuess) {
		if(this.character === newGuess) {
			this.guessed = true;
		}
	}
	
};


module.exports = Letter;



