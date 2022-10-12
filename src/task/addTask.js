import { chevronDownIcon, chevronUpIcon, xMarkIcon } from "../icons.js";
import removeTask from "./removeTask.js";
import moveTask from "./moveTask.js";
import completeTask from "./completeTask.js";
import taskCounter from "./taskCounter.js";
import autoAnimate from "@formkit/auto-animate";

const addTask = (
  { id, emoji, description, status },
  loadFromLocalStorage,
  todos
) => {
  const emojiPicker = document.getElementById("new-task-form__emoji-button");
  const newTaskInput = document.getElementById("new-task-form__input");
  const completedTasks = document.getElementById("tasks__completed");
  const taskList = document.getElementById("tasks__list");

  autoAnimate(taskList);

  if (!description) {
    alert("Oops, can't add an empty task 😬");
    return;
  }

  const taskEmoji = emoji || emojiPicker.innerText;

  const newTaskItem = document.createElement("li");
  newTaskItem.setAttribute("class", "tasks__task-item");

  const newCompleteCheckbox = document.createElement("input");
  newCompleteCheckbox.setAttribute("type", "checkbox");
  newCompleteCheckbox.setAttribute("class", "tasks__complete-checkbox");
  newTaskItem.appendChild(newCompleteCheckbox);

  const newTaskContent = document.createElement("div");
  newTaskContent.setAttribute("class", "tasks__content");
  newTaskItem.appendChild(newTaskContent);

  const newTaskEmoji = document.createElement("span");
  newTaskEmoji.setAttribute("class", "tasks__emoji");
  newTaskEmoji.innerText = taskEmoji;
  newTaskContent.appendChild(newTaskEmoji);

  const newTaskDescription = document.createElement("span");
  newTaskDescription.setAttribute("class", "tasks__description");
  newTaskDescription.innerText = description;
  newTaskContent.appendChild(newTaskDescription);

  const newActions = document.createElement("div");
  newActions.setAttribute("class", "tasks__actions");
  newTaskItem.appendChild(newActions);

  const newMoveUpButton = document.createElement("button");
  newMoveUpButton.setAttribute("class", "tasks__move-button");
  newMoveUpButton.setAttribute("data-direction", "up");
  newMoveUpButton.innerHTML = chevronUpIcon;
  newActions.appendChild(newMoveUpButton);

  const newMoveDownButton = document.createElement("button");
  newMoveDownButton.setAttribute("class", "tasks__move-button");
  newMoveDownButton.setAttribute("data-direction", "down");
  newMoveDownButton.innerHTML = chevronDownIcon;
  newActions.appendChild(newMoveDownButton);

  const newDeleteButton = document.createElement("button");
  newDeleteButton.setAttribute("class", "tasks__delete-button");
  newDeleteButton.innerHTML = xMarkIcon;
  newActions.appendChild(newDeleteButton);

  if (status === "completed") {
    newCompleteCheckbox.checked = true;
    completedTasks.appendChild(newTaskItem);
  } else {
    taskList.appendChild(newTaskItem);
  }

  newTaskInput.focus();

  const taskId = id || new Date().getTime();

  todos.push({
    id: taskId,
    emoji: taskEmoji,
    description: description,
    status: status || "uncompleted",
  });

  if (!loadFromLocalStorage) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  moveTask(newMoveUpButton, newTaskItem, taskId, "up", todos);
  moveTask(newMoveDownButton, newTaskItem, taskId, "down", todos);
  removeTask(newDeleteButton, newTaskItem, taskId, todos);
  completeTask(newCompleteCheckbox, newTaskItem, taskId, todos);
  taskCounter();
};

export default addTask;
