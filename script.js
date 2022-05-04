const initialTasks = ["свою задачу", "запиши"];

const template = document.querySelector("#template").content;
const todoList = document.querySelector(".todo__list");
const todoName = document.querySelector(".todo__name");
const todoForm = document.querySelector(".todo__form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (todoName.value === "") {
    addTask("задача отсутствует:)");
    todoName.value = "";
  } else {
    addTask(todoName.value);
    todoName.value = "";
  }
});

function task(text) {
  const task = template.cloneNode(true);
  task.querySelector(".todo__text").textContent = text;
  task.querySelector(".todo__button").addEventListener("click", function (e) {
    e.preventDefault();
    e.target.closest(".todo__item").remove();
  });
  return task;
}

function addTask(text) {
  todoList.prepend(task(text));
}

initialTasks.forEach(function (i) {
  todoList.prepend(task(i));
});
