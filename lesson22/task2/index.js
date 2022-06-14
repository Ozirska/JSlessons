const checkbox = document.querySelectorAll(".task-status");
function check(event) {
  console.log(event.target.checked);
}
[...checkbox].map((el) => el.addEventListener("click", check));
