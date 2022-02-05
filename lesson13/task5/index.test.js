import { it } from "eslint/lib/rule-tester/rule-tester";
import { cleanTransactionsList } from "./index";

it("should keep numbers only", () => {
  const result = cleanTransactionsList(["milion"]);
  expect(result).toEqual([]);
});

it("should formate numbers", () => {
  const result = cleanTransactionsList(["11.1", 11]);

  expect(result).toEqual(["$11.10", "$11.00"]);
});
