import {increment, decrement, reset}
  from "../../store/counter/actions";

const initialState = {
  counter: 5,
}

test("increment By 2", () => {
  expect(increment(2))
    .toEqual({type: "INCREMENT", incrementBy: 2});
})

test("decrement By 1", () => {
  expect(decrement())
    .toEqual({type: "DECREMENT", decrementBy: -1});
})

test("reset", () => {
  expect(reset())
    .toEqual({type: "RESET"});
})
