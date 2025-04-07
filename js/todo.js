document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.querySelector("#todo_input");

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
        saveTodo(text, checked);
      });
    }
  }
  function creatList(e) {
    e.preventDefault();
    const todoValue = todoInput.value;
    if (todoValue == "") {
      return;
    } else {
      printTodo(todoValue, 0);
      saveTodo(todoValue, 0);
      todoInput.value = "";
    }
  }

  function savedTodo(todoValue, checkValue) {
    const todoListObj = {
      text: todoValue,
      id: Date.now(),
      checked: checkValue,
    }; // 투두리스트 오브젝트 키값 생성
    todolist.push(todoListObj); // 투두리스트 배열에 오브젝트 추가
    localStorage.setItem("ToDo", JSON.stringify(todolist));
  } // 항목을 로컬 스토리지에 저장
});
