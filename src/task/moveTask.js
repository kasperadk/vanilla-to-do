const moveTask = (moveButton, task, taskId, direction, todos) => {
  moveButton.addEventListener("click", () => {
    const foundTaskIndex = todos.findIndex((item) => item.id === taskId);

    if (direction === "up" && task.previousElementSibling) {
      task.previousElementSibling.before(task);

      const foundTask = todos.splice(foundTaskIndex, 1)[0];
      todos.splice(foundTaskIndex - 1, 0, foundTask);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    if (direction === "down" && task.nextElementSibling) {
      task.nextElementSibling.after(task);

      const foundTask = todos.splice(foundTaskIndex, 1)[0];
      todos.splice(foundTaskIndex + 1, 0, foundTask);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
};

export default moveTask;
