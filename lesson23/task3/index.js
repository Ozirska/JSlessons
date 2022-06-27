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
      listItemElem.dataset.id = Math.random(2).toString(35).substring(2);
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
      checkbox;
    });
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

  console.log(tasks);
};

const createBtn = document.querySelector(".btn");
createBtn.addEventListener("click", createElemToDo);

const styleCheckbox = (event) => {
  const idElemClos = event.target.closest(".list__item");

  if (event.target.checked === true) {
    event.target.checked = true;
    idElemClos.classList.add("list__item_done");
  }
  if (event.target.checked === false) {
    event.target.checked = false;
    idElemClos.classList.add("list__item");
  }
};

const checkboxElem = document.querySelectorAll(".list__item-checkbox");

[...checkboxElem].map((el) => el.addEventListener("change", styleCheckbox));
