import { it } from "eslint/lib/rule-tester/rule-tester";
import { calc } from "./calculator";

it("what if not a string", () => {
  const result = calc([]);
  expect(result).toEqual(null);
});

it("should get sum", () => {
  const result = calc("2 + 3");
  expect(result).toEqual("2 + 3 = 5");
});

it("should get remainder", () => {
  const result = calc("7 - 3");
  expect(result).toEqual("7 - 3 = 4");
});

it("should get denominator", () => {
  const result = calc("9 / 3");
  expect(result).toEqual("9 / 3 = 3");
});

it("should get product", () => {
  const result = calc("9 * 3");
  expect(result).toEqual("9 * 3 = 27");
});
