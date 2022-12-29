import { initTodo } from "./todoList.js";
import { renderTasks } from "./renderTask.js";
import { getTasksList } from "./tasksGateway.js";
import { setItem } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasksList) => {
    setItem("tasksList", tasksList);
    renderTasks();
  });

  initTodo();
});

const listElem = document.querySelector(".list");

const onStorageChange = (e) => {
  if (e.key === "storageTasks") {
    listElem.innerHTML = "";
    renderTasks();
  }
};
window.addEventListener("storage", onStorageChange);

// onStorageChange синхронизирует между вкладками
