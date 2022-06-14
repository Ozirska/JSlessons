const checkbox = document.querySelectorAll(".task-status");
const check = (event) => {
  console.log(event.target.checked);
};
[...checkbox].map((el) => el.addEventListener("change", check));
