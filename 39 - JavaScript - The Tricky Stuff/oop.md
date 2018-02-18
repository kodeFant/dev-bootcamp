#Object Oriented Programming

##Define what OOP is
* A progamming model based around the idea of objects
* These objects are constructed from what are called "classes", which we can think of like a blueprint. We call these objects created from classes "instances"

But JavaScript does not have "classes" built into it - so what do we do? We use functions and objects!

* Constructor Functions
Blueprints for what a class of objects, defining for example what each house object should be.

function House(bedrooms, bathrooms, numSqft) {
  this.bedrooms = bedrooms;
  this,bathrooms = bathrooms;
  this.numSqft = numSqft
}

Capitalize the function name
We are attaching properties onto the keyword 'this'. We would like the keyword 'this' to refer to the object we will create from out constructor function. How might we do that?

##Revisit the 'new' keyword and understand the four things it does
What does the new keyword do? A lot more than we might think...
* It first creates an empty object
* It then sets the keyword 'this' to to be that empty object
* It adds the line 'return this' to the end of the function, which follows it
* It adds a property onto the empty object called "_proto_", which links the prototype property on the constructor function to the empty object (more on this later)

##Use constructor functions to reduce duplication in our code
##Use call and apply to refactor constructor function

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  //we can also set properties on the keyword this
  //that are preset values
  this.numWheels = 4;
}
##CALL method:
function Motorcycle(make, model, year) {
  //Using call
  Car.call(this, make, model, year);
  this.numWheels = 2;
}

##APPLY method:
function Motorcycle(make, model, year) {
  //Using apply
  Cap.apply(this, [make, model, year]);
  this.numWheels = 2;
}

##APPLY with arguments keyword
function Motorcycle(make, model, year) {
  // even better using apply with arguments
  Car.apply(this, arguments);
  this.numWheels = 2;
}

#RECAP - Constructor functions and new
* Object Oriented Programming is a model based on objects constructed from a blueprint. We use OOP to write mode modular and shareable code

* In languages that have built-in support for OOP, we call these blueprints "classes", and the objects created from them "instances"

* Since we do not have built-in class support in JavaScript, we mimic classes by using functions. These constructor functions create objects through the use of the new keyword

* We can avoid duplication in multiple constructor functions by using call or apply

#Prototypes Objectves
## Understand what the prototype object is
* Every constructor function has a property on it called "prototype",which is an object
* The prototype object has a property on it called "constructor", which points back to the constructor function
* Anytime an object is created using the 'new' keyword, a property called "__proto__" gets created, linking the object and the prototype property of the construction functuon

## Describe and diagram the relationship between __proto__, prototype and constructor

// this is the constructor function
function Person(name) {
  this.name = name;
}

// this is an object created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

// since we used the 'new' keyword, we have established
// a link between the object and the prototype property
// we can access that using __proto__

elie.__proto__ === Person.prototype; // true
colt.__proto__ === Person.prototype; // true

// The Person.prototype object also has a property
// called constructor which points back to the function
Person.prototype.constructor === Person; // true

## Add methods and properties on the prototype object to write more efficient code

###Prototype
* Where does the prototype fit into all of this?
Remember, the prototype is shared among all objects created by that constructor function

// this is the constructor function
function Person(name) {
  this.name = name;
}

// this is an object created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

Person.prototype.isInstructor = true;

elie.isInstructor // true
colt.isInstructor // true

// how were we able to access properties on the prototype??

// __proto__ !

## Explain the difference between adding methods and properties to the prototype versus the constructor function


#Refactoring
Now that we know that objects created by the same
constructor have a shared prototype, let's refactor some code

function Person(name) {
  this.name = name;
  this.sayHi = function() {
    return "Hi " + this.name;
  }
}

ellie = new Person("Elie")
elie.sayHi(); // Hi Elie

// now this code works, but it is inefficient
// every time we make an object using the new keyword we have to redefine this function
// but its the same for everyone! Let's put it on the prototype instead!

REFACTOR:

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  return "Hi " + this.name;
}

elie = new Person("Elie");
elie.sayHi(); // Hi Elie

##RECAP OOP
* Every tome the new keyword is used, a link between the object created and the prototype property of the constructor is established - this link can be access using __proto__
* The prototype object contains a property called constructor, which points back to the constructor function
* To share properties and methods for objects created by a constructor function, place them in the prototype as it is the most efficient