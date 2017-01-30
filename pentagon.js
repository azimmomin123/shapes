//Making sure that we do not have any errors in our js file
'use strict'


// Creating a Constructior called Pentagon
function Pentagon (side1, side2, side3, side4, side5){
	//if this fucntion is called with out the word new then it will force the fucntion to be called with the word new
	if (!(this instanceof Pentagon)) {
	return new Pentagon (side1, side2, side3, side4, side5);
	}

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
	this.type = 'Pentagon';
};

//Exporting the Pentagon Object
module.exports = Pentagon;