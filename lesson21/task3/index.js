export const getTitle = () => {
  const titleElem = document.querySelector(".title");

  return titleElem.textContent;
};

export const getDescription = () => {
  const description = document.querySelector(".about");
  return description.innerText;
};

export const getPlans = () => {
  const plans = document.querySelector(".plans");
  return plans.innerHTML;
};

export const getGoal = () => {
  const goals = document.querySelector(".goal");
  return goals.outerHTML;
};
