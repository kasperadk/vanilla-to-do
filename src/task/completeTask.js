import taskCounter from "./taskCounter.js";
import autoAnimate from "@formkit/auto-animate";

const completeTask = (completeCheckbox, task, taskId, todos) => {
  const completedTasks = document.getElementById("tasks__completed");
  const taskList = document.getElementById("tasks__list");

  autoAnimate(completedTasks);

  completeCheckbox.addEventListener("change", () => {
    const foundTaskIndex = todos.findIndex((item) => item.id === taskId);

    if (completeCheckbox.checked) {
      completedTasks.appendChild(task);

      todos[foundTaskIndex].status = "completed";
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      taskList.appendChild(task);

      todos[foundTaskIndex].status = "uncompleted";
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    taskCounter();
  });
};

export default completeTask;
