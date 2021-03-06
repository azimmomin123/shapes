//Pulling the object that was returned from the repsective files
var Square = require("./square.js");
var Pentagon = require("./pentagon.js");
var Triangle = require("./triangle.js");

// Creating a Constructior called Shape
function Shape (type){
	this.type = type;
};

//Assigning a function to the Shape prototype 
Shape.prototype.get_type = function(){
	return this.type;
}; 


//Calculating the total perimeter of the shape given the inputs. Also assigning a function to the Shape prototype
Shape.prototype.total_length = function(){
	//Declaring a variable
	var length;

	//if else statement to determine which calculation to run
	if(this.type === "Square"){
		length = this.side1*4;
	}else if (this.type === "Triangle"){
		length = this.side1 + this.side2 + this.side3;
	}else if (this.type === "Pentagon"){
		length = this.side1 + this.side2 + this.side3 + this.side4 + this.side5;
	}
	//returning the length
	return length;
};

//Saying the given shape a dependancy of the Shape constructor
Square.prototype = new Shape;
Square.prototype.constructor = Square;

Triangle.prototype = new Shape;
Triangle.prototype.constructor = Triangle;

Pentagon.prototype = new Shape;
Pentagon.prototype.constructor = Pentagon;

// function Triangle (side1, side2, side3){
// 	if (!(this instanceof Triangle)) {
// 	return new Triangle (side1, side2, side3);
// 	}

// 	this.side1 = side1;
// 	this.side2 = side2;
// 	this.side3 = side3;
// 	this.type = 'Triangle'


// };

// function Pentagon (side1, side2, side3, side4, side5){
// 	if (!(this instanceof Pentagon)) {
// 	return new Pentagon (side1, side2, side3, side4, side5);
// 	}

// 	this.side1 = side1;
// 	this.side2 = side2;
// 	this.side3 = side3;
// 	this.side4 = side4;
// 	this.side5 = side5;
// 	this.type = 'Pentagon'
// };

// function Square (side1){
// 	if (!(this instanceof Square)) {
// 	return new Square (side1);
// 	}

// 	this.side1 = side1;
// 	this.type = 'Square'
// };

//Passing arguments to each constructor with the word new to create a new object
var triangle = new Triangle(1, 2, 3);
var square = new Square(2);
var pentagon = new Pentagon (1, 2, 3, 4, 5);
var shape = new Shape();

//Displaying the length of the given shape
console.log("Triangle Length: " + triangle.total_length());
console.log("Square Length: " + square.total_length());
console.log("Pentagon Length: " + pentagon.total_length());

//Displaying the name of the function that each shape has
console.log("triangle.get_type is [function: " + triangle.get_type() + "]");
console.log("square.get_type is [function: " + square.get_type() + "]");
console.log("pentagon.get_type is [function: " + pentagon.get_type() + "]");

//Chekcing to see if the shape if an instanceof Shape
console.log("triangle instanceof Triangle: " + (triangle instanceof Triangle));
console.log("square instanceof Square: " + (square instanceof Square));
console.log("pentagon instanceof Pentagon: " + (pentagon instanceof Pentagon))
;
