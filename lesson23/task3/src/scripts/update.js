import { renderTasks } from "./renderTask.js";
import { setItem, getItem } from "./storage.js";

const listElem = document.querySelector(".list");

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return;
  }

  const taskList = getItem("storageTasks");

  const newTaskList = taskList.map((task) => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        date: done ? new Date() : null,
      };
    }
    return task;
  });
  setItem("storageTasks", newTaskList);
  listElem.innerHTML = "";
  renderTasks();
};
const checkbox = document.createElement("input");
checkbox.addEventListener("click", onToggleTask);
