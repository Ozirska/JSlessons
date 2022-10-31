import { initTodo } from "./todoList.js";
import { renderTasks } from "./renderTask.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
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
