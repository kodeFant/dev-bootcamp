#The keyword 'this'
* The four ways 'this' is determined

* Determined using execution context

* Can be determined using four rules:
** global
** objext/implicit
** explicit
** new

#1 - Global Context

console.log(this) //window

function variableInThis() {
  // since the value of 'this' is the window
  // all we are doing here is creating a global variable
  this.person = "Elie"
}

console.log(person) // Elie

whatIsThis() // window

##Strict Mode
When we enable strict mode and we are not inside a declared object

Add this to script to use strict mode:
"use string"

#2 - Implicit/Object
When the keyword 'this' IS inside of a declared object
'this' is the first parent object

##Nested Objects

#3 - Explicit Binding
Choose what we want the context of 'this' to be using call, apply or bind

Name of method    Parameters                    Invoke immediately?
Call              thisArg, a, b, c, d, ...      Yes
Apply             thisArg, [a, b, c, d, ...]    Yes
Bind              thisArg, a, b, c, d, ...      No

##What about Apply?

##Bind
The parameteres work like call, but bind returns a function with the contect of 'this' bound already

#4 - The 'new' keyword
We can set the context of the keyword 'this' using the 'new' keyword - it does quite a bit more as well which we will discuss furter when we talk about OOP