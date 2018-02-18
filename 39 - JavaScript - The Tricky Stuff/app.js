/* var person = {
  firstName: "Elie",
  sayHi: function () {
    return "Hi " + this.firstName;
  },
  determineContext: function () {
  return this === person;
}
} */

/* var person = {
  firstname: "Colt",
  sayHi: function() {
    return "Hi " + this.firstname;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return "Hello " + this.firstName;
    },
    determinecontext: function() {
      return this === person;
    }
  }
}

var colt = {
  firstName: "Colt",
  sayHi: function(name) {
    return "Hi " + this.firstName
  }
}

var elie = {
  firstName: "Elie"
}

colt.sayHi(); */

/* var colt = {
  firstName: "Colt",
  sayHi: function() {
    return "Hi " + this.firstName
  },
  addNumbers: function(a,b,c,d) {
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

var elie = {
  firstName: "Elie"
} 
colt.addNumbers(1,2,3,4)  // Colt just calculated 10
colt.addNumbers.call(elie,1,2,3,4)  // Elie just calculated 10
colt.addNumbers.apply(elie,[1,2,3,4]) // Elie just calculated 10
*/

/*  var colt = {
  firstName: "Colt",
  sayHi: function() {
    return "Hi " + this.firstName
  },
  addNumbers: function(a,b,c,d) {
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

var elie = {
  firstName: "Elie"
}

var elieCalc = colt.addNumbers.bind(elie, 1, 2, 3, 4)
elieCalc() // Elie just calculated 10

//With bind - we do not need to know all the arguments up front!
var elieCalc2 = colt.addNumbers.bind(elie, 1, 2)
elieCalc2(3,4) // Elie just calculated 10 */

/* // Bind in the wild:

var colt = {
  firstName: "Colt",
  sayHi: function() {
    setTimeout(function() {
      console.log("Hi " + this.firstName)
    }.bind(this), 1000)
  }
} */

//4 The 'new' keyword
/* function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
} */

/* function House(bedrooms, bathrooms, numSqft) {
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft
} */

/* function Dog(name, age) {
  this.name = name,
  this.age = age,
  this.bark = function() {
    console.log(this.name + " just barked!")
  }
}

var rusty = new Dog("Rusty", 3)
var fido = new Dog("Fido", 1)

rusty.bark() // Rusty just barked!
fido.bark() // Fido just barked! */

/* function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  //we can also set properties on the keyword this
  //that are preset values
  this.numWheels = 4;
}

function Motorcycle(make, model, year) {
  //Using call
  Car.call(this, make, model, year);
  this.numWheels = 2;
} */

// Exercise
// Create a constructor function for a Vehicle: every
// object created from this constructor should have a make,
// model, and year property. Each object should also have a
// property called isRunning which should be set to false

// Every object created from the Vehicle constructor
// should have a function called turnOn, which changes the isRunning
// property to true

// Every object created from the Vehicle constructor should have a function
// called turnOff, which changes the isRunning property to false

// Every object created from the Vehicle constructor should have a method
// called honk, which returns the string "beep" ONLY if the isRunning
// property is true

function Vehicle (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function () {
  this.isRunning = false;
}

Vehicle.prototype.honk = function () {
  if (this.isRunning === true) {
    return "beep"
  }
}

 var moppe = new Vehicle("Toyota", "Cubensis", 1998);