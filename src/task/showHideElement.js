export const showHideDeleteCompletedTasksButton = (numberOfCompletedTasks) => {
  const deleteCompletedTasksButton = document.getElementById(
    "deleteCompletedTasks"
  );

  if (numberOfCompletedTasks === 0) {
    deleteCompletedTasksButton.setAttribute("class", "hidden");
  } else {
    deleteCompletedTasksButton.classList.remove("hidden");
  }
};

export const showHideEmptyStateToDoList = (numberOfTasks) => {
  const tasksEmptyState = document.getElementById("tasks__empty-state");

  if (numberOfTasks === 0) {
    tasksEmptyState.classList.remove("hidden");
  } else {
    tasksEmptyState.setAttribute("class", "hidden");
  }
};

export const showHideCompletedTasksHeadline = (numberOfCompletedTasks) => {
  const completedTasksHeadline = document.getElementById(
    "tasks__headline-completed-tasks"
  );

  if (numberOfCompletedTasks === 0) {
    completedTasksHeadline.classList.add("hidden");
  } else {
    completedTasksHeadline.classList.remove("hidden");
  }
};
