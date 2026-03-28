import { configureStore } from '@reduxjs/toolkit'
import {counterReducer, counterSlice} from '../model/counter-slice'

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterReducer,
  },
})

// типы (если у тебя TypeScript)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch