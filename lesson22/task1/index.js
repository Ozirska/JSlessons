const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");
const logTarget = (text, color) => {
  const eventsListElem = document.querySelector(".events-list");
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};
const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySpan = logTarget.bind(null, "SPAN", "grey");

divElem.addEventListener("click", logGreenDiv);
pElem.addEventListener("click", logGreenP);
spanElem.addEventListener("click", logGreenSpan);

divElem.addEventListener("click", logGreyDiv, true);
pElem.addEventListener("click", logGreyP, true);
spanElem.addEventListener("click", logGreySpan, true);

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  document.querySelector(".events-list").innerHTML = " ";
});

const attachBtn = document.querySelector(".attach-handlers-btn");
attachBtn.addEventListener("click", logTarget);

const removeBtn = document.querySelector(".remove-handlers-btn");
removeBtn.addEventListener("click", logTarget);
