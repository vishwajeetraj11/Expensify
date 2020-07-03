import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import uuid from "uuid";
test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id ", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found ", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add an expense
test("should add an expense", () => {
  const expense = {
    id: "109",
    description: "ddd",
    note: "",
    amount: 20,
    createdAt: 230,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});
// should edit an expense
test("should edit an expense", () => {
  const updates = {
    description: "Rented Flat",
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(updates.description);
});
// should not edit expense if expense not found
test("should not edit an expense if id not found", () => {
  const updates = {
    description: "Rented Flat",
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]],
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
