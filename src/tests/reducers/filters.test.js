import filterReducer from "../../reducers/filters";
import moment from "moment";

// DEFAULT FILTER VALUE
test("should setup default filter values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

// sortBy amount Value
test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

// sortBy date Value
test('should set sortBy to date', () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = {
    type: 'SORT_BY_DATE'
  };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// SET_TEXT_FILTER value
test('should set SET_TEXT_FILTER to given text (text filter)', () => {
  const text = 'bill';
  const action = {
    type : 'SET_TEXT_FILTER',
    text
  }
  const state = filterReducer(undefined, action );
  expect(state.text).toBe(text);
});

// SET_END_DATE value
test('should set SET_END_DATE to given date (end date filter)', () => {
  const endDate = moment();
  const action = {
    type : 'SET_END_DATE',
    endDate
  }
  const state = filterReducer(undefined, action );
  expect(state.endDate).toEqual(endDate);
});

// SET_START_DATE Value
test('should set SET_START_DATE to given date ( start date filter)', () => {
  const startDate = moment();
  const action = {
    type : 'SET_START_DATE',
    startDate
  }
  const state = filterReducer(undefined, action );
  expect(state.startDate).toEqual(startDate);
});
