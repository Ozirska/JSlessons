// put your code here
export const setButton = (buttonText) => {
  const button = document.querySelector("body");
  button.createElement("button");
  button.innerHTML = buttonText;

  return button;
};
console.log(setButton("jfjgjg"));
