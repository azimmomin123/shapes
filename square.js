'use strict'

function Square (side1){
	if (!(this instanceof Square)) {
	return new Square (side1);
	}

	this.side1 = side1;
	this.type = 'Square';
	//this.total_length = side1 * 4;
	
};

module.exports = Square;