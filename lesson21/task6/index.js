// put your code here
export const finishList = () => {
  const listElem = document.querySelector("ul");

  const liElem = document.querySelectorAll("li");
  const liArr = Array.from(liElem).map((el) => el.textContent);
  for (let i = 1; i <= 8; i++) {
    if (!Array.from(liArr).includes(String(i))) {
      const newLiEl = document.createElement("li");
      newLiEl.textContent = i;
      listElem.prepend(newLiEl);
    }
  }
  const liElemNew = document.querySelectorAll("li");
  const sorted = [...liElemNew].sort((a, b) => {
    return a.innerHTML - b.innerHTML;
  });

  listElem.innerHTML = " ";
  for (let li of sorted) {
    listElem.appendChild(li);
  }
  return listElem;
};
console.log(finishList());
