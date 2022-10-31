import { getItem } from "./storage.js";
import { onToggleTask } from "./update.js";

const listElem = document.querySelector(".list");

// onToggleTask меняет состояниетаски
// обновляет масив в localStorage

export const renderTasks = () => {
  const taskLista = getItem("storageTasks") || [];
  const tasksElems = taskLista
    .sort((a, b) => a.done - b.done || b.date - a.date)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");

      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.dataset.id = id;
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      checkbox.addEventListener("click", onToggleTask);

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

// 1. функция renderTasks принимает массив
//  1.1 пройтись по массиву и назначить id
//  1.2 отсортировать
//  1.3 пройтись по массиву Даные объекта использовать для создания элемента
//     -text текст элемента
//     -done для значения чекбокса
//     -id чекбоксу добавить дата атрибут
//  1.4 на чекбокс навесить событие "change"
//  1.5 созданый li добавиль в ul
