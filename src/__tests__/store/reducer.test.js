import {increment, decrement, reset}
  from "../../store/counter/actions";
import counterReducer
  from "../../store/counter/reducer";

const initialState = 5

test("increment By 1", () => {
  expect(counterReducer(initialState, increment()))
    .toEqual(6);
})

test("decrement By 1", () => {
  expect(counterReducer(initialState, decrement(4)))
    .toEqual(1);
})

test("reset", () => {
  expect(counterReducer(initialState, reset()))
    .toEqual(0);
})
