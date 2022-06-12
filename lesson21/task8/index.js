// put your code here
export const squaredNumbers = () => {
  const square = document.querySelectorAll(".number");
  const make = Array.from(square).map((el) => {
    let num = el.dataset.number;
    return (el.dataset.squaredNumber = num * num);
  });
  return make;
};
console.log(squaredNumbers());
