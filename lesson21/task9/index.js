export const getSection = (num) => {
  const spanList = document.querySelector("span[data-number = `${num}`]");
  const element = spanList.closest(".box");
  return element.dataset.section;
};
console.log(getSection(4));
