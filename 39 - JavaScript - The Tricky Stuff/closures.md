#Closures

##Understand what a closure is and what it is not

* Closure defined
** A closure is a function that makes use of variables defined in outer functions tht have previously returned
** What does that mean? Sometimes an example is woth 1000 words (or slides)


##Use a closure to emulate private variables

###Our first closure
function outer(a) {
  return function inner(b) {
    return a + b
  }
}

outer(5)(5) // 10

var storeOuter = outer(5)
storeOuter(10) // 15

###Your turn

function counter() {
	var count = 0;
	return function() {
	return ++count;
	}
}

var c = counter()

c() // 1
c() // 2
c() // 3

More Privacy
function classRoom() {
  var instructors = ["Colt", "Elie"]
  return {
    getInstructors: function() {
      return instructors;
    },
    addInstructor: function(instructor) {
      instructors.push(instructor);
      return instructors;
    }
  }
}

course1 = classRoom()
course1.getInstructors() // ["Elie", "Colt"]
course1.addInstructor("Ia") // ["Elie", "Colt","Ian"]
course1.getInstructors() // ["Elie", "Colt","Ian"]

course2 = classRoom()
course2.getInstructors() // ["Elie", "Colt"] - not affected by course1

// we also have NO access to the instructors variable
// which makes it private - no one can modyfy it--- you're stuck with Colt and Elie



##List use cases for closures in the real world

