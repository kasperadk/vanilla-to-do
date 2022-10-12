import addTask from "./addTask.js";

const handleFormInput = (todos) => {
  const taskForm = document.getElementById("new-task-form");
  const newTaskInput = document.getElementById("new-task-form__input");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addTask({ description: newTaskInput.value }, undefined, todos);

    newTaskInput.value = "";
  });
};

export default handleFormInput;
