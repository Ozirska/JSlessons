import { renderTasks } from "./renderTask.js";
import { setItem, getItem } from "./storage.js";

export const createElemToDo = () => {
  const listElem = document.querySelector(".list");

  const input = document.querySelector(".task-input");
  if (input.value === "") {
    return;
  }
  const taskList = getItem("tasksList") || [];
  const newTaskList = taskList.concat({
    text: input.value,
    done: false,
    id: Math.random().toString(),
    date: new Date(),
  });

  setItem("tasksList", newTaskList);

  input.value = "";

  listElem.innerHTML = "";
  renderTasks();
};
const createBtn = document.querySelector(".btn");
createBtn.addEventListener("click", createElemToDo);

//  2 функция createElemToDo  выполняется есть нажать на "кнопку создать"
//   2.1 возвращает, если инпут пустой
//   2.2 создает объект с даными из инпута и значение чекбокса
//   2.3 добавить объект в массив
//   2.4 очистить поле инпута
//   2.5 очистить старый список
//   2.6 вызвать функцию renderTasks
