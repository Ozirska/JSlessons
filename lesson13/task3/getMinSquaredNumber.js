const numbers = [12, -3, 35.2];
export default (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;

  let num = Math.min(...numbers.map(Math.abs));
  return num * num;
};
