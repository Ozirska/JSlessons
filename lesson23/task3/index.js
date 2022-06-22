const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
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

  const inputNew = { text: input.value, done: false };
  tasks.push(inputNew);

  input.value = "";

  const tasksElems = [inputNew].map(({ text, done }) => {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("list__item");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = done;
    checkbox.classList.add("list__item-checkbox");
    listItemElem.append(checkbox, text);

    return listItemElem;
  });
  listElem.prepend(...tasksElems);

  console.log(tasks);
};

const createBtn = document.querySelector(".btn");
createBtn.addEventListener("click", createElemToDo);
