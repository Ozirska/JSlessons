export const getTitleElement = () => {
  const titleElem = document.querySelector(".title");
  console.dir(titleElem);
  return titleElem;
};

export const getInputElement = () => {
  const inputElement = document.querySelector("input", ".text");

  console.dir(inputElement);
  return inputElement;
};
getTitleElement();
getInputElement();
