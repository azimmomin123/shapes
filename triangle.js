//Making sure that we do not have any errors in our js file
'use strict'

// Creating a Constructior called Triangle
function Triangle (side1, side2, side3){
	//if this fucntion is called with out the word new then it will force the fucntion to be called with the word new
	if (!(this instanceof Triangle)) {
	return new Triangle (side1, side2, side3);
	}

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.type = 'Triangle';


};

//Exporting the Triangle Object
module.exports = Triangle;