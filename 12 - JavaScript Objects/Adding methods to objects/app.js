const obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function(x,y) {
    return x + y;
  }
}

function speak() {
  return "WOOF!"
}

var dogSpace = {};

dogSpace.speak = function() {
  return "WOOF!";
}

var catSpace = {};

catSpace.speak = function () {
  return "MEOW!";
}