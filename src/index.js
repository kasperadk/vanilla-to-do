import getQuote from "./api/getQuote";
import darkMode from "./darkMode.js";

import taskEmoji from "./task/taskEmoji.js";
import taskCounter from "./task/taskCounter.js";
import initialLoadTasksFromLocalStorage from "./task/loadFromLocalStorage.js";
import handleFormInput from "./task/handleFormInput.js";
import deleteCompletedTasks from "./task/deletedCompletedTasks.js";

// Keeps track of the to-do's and are used for saving/manipulating local storage.
let todos = [];

initialLoadTasksFromLocalStorage(todos);
taskCounter();
getQuote();
taskEmoji();
darkMode();
handleFormInput(todos);
deleteCompletedTasks(todos);
