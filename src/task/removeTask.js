import taskCounter from "./taskCounter.js";

const removeTask = (deleteButton, task, taskId, localeStorageTodos) => {
  deleteButton.addEventListener("click", () => {
    const description = task.querySelector(".tasks__description").innerText;
    if (
      window.confirm(`Are you sure you want to delete "${description}"? 🗑️`)
    ) {
      task.remove();

      localeStorageTodos = localeStorageTodos.filter(
        (item) => item.id !== taskId
      );
      localStorage.setItem("todos", JSON.stringify(localeStorageTodos));

      taskCounter();
    }
  });
};

export default removeTask;
