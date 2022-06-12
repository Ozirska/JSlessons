// put your code here
export const manageClasses = () => {
  const findElem4 = document.querySelector(".four");
  if (findElem4.classList.contains("some-class") === true) return "yes";

  return findElem4;
};
console.log(manageClasses());

//  const make = Array.from(square).map((el) => el.textContent);
