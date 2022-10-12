import {
  showHideCompletedTasksHeadline,
  showHideEmptyStateToDoList,
  showHideDeleteCompletedTasksButton,
} from "./showHideElement.js";

const taskCounter = () => {
  const taskList = document.getElementById("tasks__list");
  const tasksCount = document.getElementById("tasks__count");
  const completedTasks = document.getElementById("tasks__completed");

  const numberOfTasks = taskList.children.length;
  const numberOfCompletedTasks = completedTasks.children.length;
  const completedTasksCount = document.getElementById("tasks__completed-count");

  tasksCount.innerText = `(${numberOfTasks})`;
  completedTasksCount.innerText = `(${numberOfCompletedTasks})`;
  showHideDeleteCompletedTasksButton(numberOfCompletedTasks);
  showHideEmptyStateToDoList(numberOfTasks);
  showHideCompletedTasksHeadline(numberOfCompletedTasks);

  const pageTitle = "Vanilla To-do";

  if (numberOfTasks === 0) {
    document.title = pageTitle;
  }
  if (numberOfTasks === 1) {
    document.title = `${pageTitle} (${numberOfTasks} task) `;
  }
  if (numberOfTasks > 1) {
    document.title = `${pageTitle} (${numberOfTasks} tasks) `;
  }
};

export default taskCounter;
