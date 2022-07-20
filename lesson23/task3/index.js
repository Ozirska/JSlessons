const tasks = [
  {
    text: "Buy milk",
    done: false,
    id: "1",
    date: new Date("10.07.2021, 12:14"),
  },
  {
    text: "Pick up Tom from airport",
    done: false,
    id: "2",
    date: new Date("10.07.2012, 12:14"),
  },
  {
    text: "Visit party",
    done: false,
    id: "3",
    date: new Date("11.07.2012, 12:14"),
  },
  {
    text: "Visit doctor",
    done: true,
    id: "4",
    date: new Date("10.07.2002, 12:14"),
  },
  {
    text: "Buy meat",
    done: true,
    id: "5",
    date: new Date("10.07.2013, 12:14"),
  },
];

const listElem = document.querySelector(".list");

// 1. функция renderTasks принимает массив
//  1.1 пройтись по массиву и назначить id
//  1.2 отсортировать
//  1.3 пройтись по массивую Даные объекта использовать для создания элемента
//     -text текст элемента
//     -done для значения чекбокса
//     -id чекбоксу добавить дата атрибут
//  1.4 на чекбокс навесить событие "change"
//  1.5 созданый li добавиль в ul

const renderTasks = (tasksList) => {
  const tasksElems = tasksList

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

  tasks.push({
    text: input.value,
    done: false,
    id: Math.random().toString(),
    date: new Date(),
  });

  input.value = "";

  listElem.innerHTML = "";
  renderTasks(tasks);
};
// навесить событие на кнопку

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

  const taskData = tasks.find((task) => task.id === e.target.dataset.id);
  Object.assign(taskData, { done: e.target.checked, date: new Date() });

  listElem.innerHTML = "";
  renderTasks(tasks);
};

renderTasks(tasks);
