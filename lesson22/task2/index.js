const checkbox = document.querySelector(".task-status");
const check = (event) => {
  console.log(event.target.checked);
};
checkbox.addEventListener("click", check);
