import { configureStore } from '@reduxjs/toolkit'
import {counterReducer} from '../model/counter-reducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// типы (если у тебя TypeScript)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch