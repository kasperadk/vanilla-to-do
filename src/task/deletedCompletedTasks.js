import taskCounter from "./taskCounter.js";

const deleteCompletedTasks = (todos) => {
  const completedTasks = document.getElementById("tasks__completed");
  const deleteCompletedTasksButton = document.getElementById(
    "deleteCompletedTasks"
  );

  deleteCompletedTasksButton.addEventListener("click", () => {
    const numberOfCompletedTasks = completedTasks.children.length;
    if (
      numberOfCompletedTasks !== 0 &&
      window.confirm(
        numberOfCompletedTasks > 1
          ? `Are you sure you want to delete all ${numberOfCompletedTasks} completed tasks? 🗑️`
          : "Are you sure you want to delete the completed task? 🗑️"
      )
    ) {
      completedTasks.innerHTML = "";

      todos = todos.filter((item) => item.status !== "completed");
      localStorage.setItem("todos", JSON.stringify(todos));
      taskCounter();
    }
  });
};

export default deleteCompletedTasks;
