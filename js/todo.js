const todo_input = document.querySelector("#todo_input");
const todoCheck = document.querySelector("#todo_checkbox");
const addBtn = document.querySelector(".add_button");
const completeBtn = document.querySelector(".complete_button");
const renameBtn = document.querySelector(".rename");
const deleteBtn = document.querySelector(".delete_button");

let todolist = [];

function setting() {
  storageLoad(); // 로컬 저장소 불러오기
  addBtn.addEventListener("click", createList);
}

setting();

function storageLoad() {
  const savedTodo = localStorage.getItem("TODO");
  if (savedTodo != null) {
    const TodoList = JSON.parse(savedTodo);
    TodoList.forEach((todo) => {
      const { text } = todo;
      const { checked } = todo;
      printTodo(text, checked);
      savedTodo(text, checked);
    });
  }
}
