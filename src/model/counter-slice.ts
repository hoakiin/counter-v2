import { createAppSlice } from "../utils/createAppSlice";

export const counterSlice = createAppSlice({
  name: "counter",
  initialState: {
    count: 0,
    minValue: Number(localStorage.getItem("minValue")) || 0,
    maxValue: Number(localStorage.getItem("maxValue")) || 5,
  },
  selectors: {
    selectCount: (state) => state.count,
    selectMinValue: (state) => state.minValue,
    selectMaxValue: (state) => state.maxValue,
  },
  reducers: (create) => ({
    increaseCountAC: create.reducer((state) => {
      state.count += 1;
    }),

    resetCountAC: create.reducer((state) => {
      state.count = 0;
    }),

    setValuesAC: create.reducer<{ min: number; max: number }>(
      (state, action) => {
        state.minValue = action.payload.min;
        state.maxValue = action.payload.max;
        state.count = action.payload.min;
      },
    ),
  }),
});

export const { selectCount, selectMinValue, selectMaxValue } =
  counterSlice.selectors;
export const { increaseCountAC, resetCountAC, setValuesAC } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
