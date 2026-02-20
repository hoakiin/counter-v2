import { createAction, createReducer } from "@reduxjs/toolkit";

export const increaseCountAC = createAction("counter/inceaseCountAC");
export const resetCountAC = createAction("counter/resetCountAC");

const initialState: number = 0;

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increaseCountAC, (state) => {
      return state + 1;
    })
    .addCase(resetCountAC, () => {
      return 0;
    });
});
