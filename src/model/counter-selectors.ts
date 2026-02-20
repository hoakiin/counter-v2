import type { RootState } from "../app/store";

export const selectCounter = (state: RootState): number => state.counter