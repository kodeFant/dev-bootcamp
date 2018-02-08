const todos = ["Buy New Turtle"];
let input = prompt("What would you like to do?");


while (input !== "quit") {
  //handle input
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  }  else if (input === "delete") {
    deleteTodo();
  }
  //ask again for new input
  input = prompt("What would you like to do?")
}
console.log("OK, YOU QUIT THE APP");

function listTodos() {
  console.log("**********");
  todos.forEach((todo, i) => {
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo() {
  //ask for a new todo
  const newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
  console.log("Added Todo")
}

function deleteTodo() {
  //ask for index of todo to be deleted
  const index = prompt("Enter index of todo to delete")
  //delete that todo
  //splice
  todos.splice(index, 1)
  console.log("Deleted Todo")
}