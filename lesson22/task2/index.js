const checkbox = document.querySelector(".task-status");
function check(event) {
  console.log(event.target.checked);
}
checkbox.addEventListener("click", check);
