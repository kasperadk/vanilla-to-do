import addTask from "./addTask.js";

const initialLoadTasksFromLocalStorage = (todos) => {
  const localStorageTodos = localStorage.getItem("todos");

  JSON.parse(localStorageTodos)?.forEach((todo) => addTask(todo, true, todos));
};

export default initialLoadTasksFromLocalStorage;
