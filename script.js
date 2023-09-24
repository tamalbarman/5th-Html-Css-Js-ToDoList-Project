const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

form.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  if (!input.value) return;

  const task = input.value;
  const taskItem = document.createElement("li");
  taskItem.innerHTML = task;
  list.appendChild(taskItem);
  input.value = "";
}
