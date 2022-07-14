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
      checkbox.addEventListener("change", onToggleTask);

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const createElemToDo = () => {
  const input = document.querySelector(".task-input");
  if (input.value === "") {
    return;
  }

  const inputNew = { text: input.value, done: false };
  tasks.push(inputNew);

  input.value = "";

  listElem.innerHTML = "";
  renderTasks(tasks);
};

const createBtn = document.querySelector(".btn");
createBtn.addEventListener("click", createElemToDo);

const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find(
    (task) => String(task.id) === e.target.dataset.id
  );
  Object.assign(taskData, { done: e.target.checked });
  listElem.innerHTML = "";
  renderTasks(tasks);
};

renderTasks(tasks);
