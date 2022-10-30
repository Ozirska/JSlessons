const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getItem = (key) => JSON.parse(localStorage.getItem(key));

const listElem = document.querySelector(".list");

// 1. функция renderTasks принимает массив
//  1.1 пройтись по массиву и назначить id
//  1.2 отсортировать
//  1.3 пройтись по массиву Даные объекта использовать для создания элемента
//     -text текст элемента
//     -done для значения чекбокса
//     -id чекбоксу добавить дата атрибут
//  1.4 на чекбокс навесить событие "change"
//  1.5 созданый li добавиль в ul

const renderTasks = () => {
  // const renderTasks = (tasksList) =>
  // const tasksElems = tasksList
  // замість цього має бути вuклик обьєкта з localStorage
  // const tasksElems = JSON.parse(localStorage.getItem("storageTasks"));

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

//  2 функция createElemToDo  выполняется есть нажать на "кнопку создать"
//   2.1 возвращает, если инпут пустой
//   2.2 создает объект с даными из инпута и значение чекбокса
//   2.3 добавить объект в массив
//   2.4 очистить поле инпута
//   2.5 очистить старый список
//   2.6 вызвать функцию renderTasks

const createElemToDo = () => {
  const input = document.querySelector(".task-input");
  if (input.value === "") {
    return;
  }
  const taskList = getItem("storageTasks") || [];
  const newTaskList = taskList.concat({
    text: input.value,
    done: false,
    id: Math.random().toString(),
    date: new Date(),
  });

  setItem("storageTasks", newTaskList);

  input.value = "";

  listElem.innerHTML = "";
  renderTasks();
};

const createBtn = document.querySelector(".btn");
createBtn.addEventListener("click", createElemToDo);

// 3 функция onToggleTask принимает событие
//  3.1 проверка на чекбокс
//  3.2 в масиве найти объект на который нажали
//  3.3 изменить значение done в этом объекте
//  3.4 очистить список
//  3.5 вызвать функцию renderTasks

const onToggleTask = (e) => {
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
// onToggleTask меняет состояниетаски
// обновляет масив в localStorage

renderTasks();

const onStorageChange = (e) => {
  if (e.key === "storageTasks") {
    listElem.innerHTML = "";
    renderTasks();
  }
};
window.addEventListener("storage", onStorageChange);

// onStorageChange синхронизирует между вкладками
