import getSum, { getSquaredArray, getOddNumbers } from "./calculator.js";

it("should get square numbers", () => {
  const result = getSquaredArray([1, 2, 3, 4]);

  expect(result).toEqual([1, 4, 9, 16]);
});

it("should keep odd numbers", () => {
  const result = getOddNumbers([1, 2, 3, 4]);

  expect(result).toEqual([1, 3]);
});

it("should get sum of numbers", () => {
  const result = getSum(3, 4);

  expect(result).toEqual(7);
});
