const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");

const renderTasks = (tasksList) => {
  tasksList.forEach((task, index) => (task.id = index + 1));
  const tasksElems = tasksList

    .sort((a, b) => a.done - b.done)

    .map(({ text, done, id }, el) => {
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
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const createElemToDo = () => {
  const input = document.querySelector(".task-input");
  if (input.value === "") {
    input.value = "";
    return;
  }
  const inputNew = { text: input.value, done: false };
  tasks.unshift(inputNew);

  input.value = "";

  listElem.innerHTML = "";
  renderTasks(tasks);

  const checkboxElem = document.querySelectorAll(".list__item-checkbox");

  [...checkboxElem].map((el) => el.addEventListener("change", styleCheckbox));
};

const createBtn = document.querySelector(".btn");
createBtn.addEventListener("click", createElemToDo);

const onToggleTask = (event) => {
  const isChecked = event.target.classList.contains("list__item-checkbox");
  if (!isChecked) return;

  const taskData = tasks.find(
    (task) => String(task.id) === event.target.dataset.id
  );
  Object.assign(taskData, { done: event.target.checked });
  listElem.innerHTML = "";
  renderTasks(tasks);

  const checkboxElem = document.querySelectorAll(".list__item-checkbox");

  [...checkboxElem].map((el) => el.addEventListener("change", onToggleTask));
};

const checkboxElem = document.querySelectorAll(".list__item-checkbox");

[...checkboxElem].map((el) => el.addEventListener("change", onToggleTask));

// 1. в функции renderTasks для каждого чекбокса назначить дата атрибут id
// 2. функция createElemToDo
// 2.1 проверяет наличие текста в инпуте
// 2.2 создать объект с текстом из инпута и значением не выполнен
// 2.3 новый объект добавить к масиву tasks
// 2.4 удалить список
// 2.5 вызвать функцию renderTasks(tasks), что б отрисовать обновлённый список
// 3. найти все чекбоксы
// 4. навесить событие на каждый чекбокс
// 5. функция  styleCheckbox принимает событие
// 5.1 найти дата атрибут элемента на который нажали
// 5.2 найти этот элемент в масиве
// 5.3 значение done поменять на значение event.target.checked
// 5.3 удалить список li
// 5.4 вызвать функцию renderTasks
