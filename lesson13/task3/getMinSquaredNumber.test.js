import { it } from "eslint/lib/rule-tester/rule-tester";
import getMin from "./getMinSquaredNumber";

it("what if get empty array", () => {
  const result = getMin([]);

  expect(result).toEqual(null);
});

it("what if get string", () => {
  const result = getMin("12");

  expect(result).toEqual(null);
});
