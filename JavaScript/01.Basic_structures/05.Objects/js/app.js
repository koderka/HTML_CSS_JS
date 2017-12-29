// working with objects
// example1: rectangle

var Rectangle = function (width, length) {
    this.width = width;
    this.length = length;
}
var rect = new Rectangle(10, 20);

rect.getArea = function(){
    console.log(this.width * this.length);
}
rect.getArea();

rect.getPerimiter = function(){
    console.log(2 * (this.width + this.length));
}
rect.getPerimiter();

// example2: calculator

var Calculator = function() {
    this.history = new Array();
}
Calculator.prototype.add = function(num1, num2) {
    var result = 'Added ' + num1 + ' to ' + num2 + ' got ' + (num1 + num2);
    console.log(result);
    this.history.push(result);
}
Calculator.prototype.subtract = function(num1, num2) {
    var result = 'Subtracted ' + num1 + ' from ' + num2 + ' got ' + (num1 - num2);
    console.log(result);
    this.history.push(result);
}
Calculator.prototype.multiply = function(num1, num2) {
    var result = 'Multiplied ' + num1 + ' with ' + num2 + ' got ' + (num1 * num2);
    console.log(result);
    this.history.push(result);
}
Calculator.prototype.divide = function(num1, num2) {
    var result = 'Divided ' + num1 + ' by ' + num2 + ' got ' + (num1 / num2);
    console.log(result);
    this.history.push(result);
}
Calculator.prototype.printOperations = function() {
    console.log('Historia operacji: ', this.history);
}
Calculator.prototype.clearOperations = function() {
    this.history = new Array();
    console.log('Historia operacji: ', this.history);
}

var calc = new Calculator();
calc.add(20, 10);
calc.subtract(20, 10);
calc.multiply(20, 10);
calc.divide(20, 10);
calc.printOperations();
calc.clearOperations();

// example3: robot

var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var robot1 = new Robot("robot1");
robot1.sayHi("robot3");
robot1.changeName("robot2");
robot1.fixIt();
