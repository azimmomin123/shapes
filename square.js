//Making sure that we do not have any errors in our js file
'use strict'

// Creating a Constructior called Square
function Square (side1){

	//if this fucntion is called with out the word new then it will force the fucntion to be called with the word new
	if (!(this instanceof Square)) {
	return new Square (side1);
	}

	this.side1 = side1;
	this.type = 'Square';
	//this.total_length = side1 * 4;
	
};

//Exporting the Square Object
module.exports = Square;