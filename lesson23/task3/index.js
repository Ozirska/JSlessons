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
  tasksElems.forEach((n, i) => (n.dataset.id = i + 1));

  listElem.prepend(...tasksElems);
};

renderTasks(tasks);

const createElemToDo = () => {
  const input = document.querySelector(".task-input");
  if (input.value === "") {
    input.value = "";
    return;
  }
  const inputNew = { text: input.value, done: false };
  tasks.push(inputNew);

  input.value = "";

  listElem.textContent = "";

  renderTasks(tasks);
};

const createBtn = document.querySelector(".btn");
createBtn.addEventListener("click", createElemToDo);

const styleCheckbox = (event) => {
  const idElemClos = event.target.closest(".list__item");

  const itemId = event.target.parentElement.dataset.id;

  if (event.target.checked === true) {
    idElemClos.classList.add("list__item_done");
  }
  if (event.target.checked === false) {
    idElemClos.classList.add("list__item");
  }
};

const checkboxElem = document.querySelectorAll(".list__item-checkbox");

[...checkboxElem].map((el) => el.addEventListener("change", styleCheckbox));
