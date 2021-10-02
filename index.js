//Selectors
const todoInput = document.querySelector(".new-todo");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filters > li");

//Event Listeners
todoInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTodo(event);
  }
});
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
  //event.preventDefault();

  const todoItem = document.createElement("li");
  todoItem.classList.add("todo");

  //create view
  const newTodo = document.createElement("div");
  newTodo.classList.add("view");

  //check mark
  const completeButton = document.createElement("input");
  completeButton.type = "checkbox";
  completeButton.classList.add("toggle");

  //Label
  const newLabel = document.createElement("label");
  newLabel.innerText = todoInput.value;

  //remove button
  const removeButton = document.createElement("button");
  removeButton.classList.add("destroy");

  todoItem.appendChild(newTodo);
  newTodo.appendChild(completeButton);
  newTodo.appendChild(newLabel);
  newTodo.appendChild(removeButton);

  //APPEND TO LIST
  todoList.appendChild(todoItem);
  todoInput.value = "";
}

//delete/Check
function deleteCheck(event) {
  const item = event.target;

  if (item.classList[0] === "destroy") {
    const todo = item.parentElement;
    todo.remove();
  }

  //TODO:refactor
  if (item.checked) {
    const todoParent = item.parentElement.parentElement;
    todoParent.classList.toggle("completed");
  }
}

function filterTodo(event) {
  event.preventDefault();
  const todos = todoList.childNodes;
  console.log(todos);
  // todos.forEach(function (todo) {
  //   switch (event.target.href) {
  //     case "all":
  //       break;
  //     case "completed":
  //       if (todo.classList.contains("completed")) {
  //         todo.style.display = "flex";
  //       } else {
  //         todo.style.display = "none";
  //       }
  //   }
  // });
}
