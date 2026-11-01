const taskForm = document.getElementById("task-form");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let taskId = 0;

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = inputBox.value.trim();
  if (!taskText) {
    inputBox.focus();
    return;
  }

  const item = document.createElement("li");
  item.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-toggle";
  checkbox.id = `task-${++taskId}`;

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = taskText;

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-task";
  removeButton.setAttribute("aria-label", `Remove task: ${taskText}`);
  removeButton.textContent = "×";

  item.append(checkbox, label, removeButton);
  listContainer.append(item);

  inputBox.value = "";
  inputBox.focus();
});

listContainer.addEventListener("change", (event) => {
  if (event.target.matches(".task-toggle")) {
    event.target.closest(".task-item").classList.toggle("is-complete", event.target.checked);
  }
});

listContainer.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-task");
  if (removeButton) {
    removeButton.closest(".task-item").remove();
  }
});
