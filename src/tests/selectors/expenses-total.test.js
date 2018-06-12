import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expense", () => {
  expect(selectExpensesTotal([])).toBe(0);
});

test("should correctly add up one expense", () => {
  expect(selectExpensesTotal([expenses[0]])).toBe(expenses[0].amount);
});

test("should correctly add multiple expenses", () => {
  const total = expenses
    .map(expense => expense.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  expect(selectExpensesTotal(expenses)).toBe(total);
});
