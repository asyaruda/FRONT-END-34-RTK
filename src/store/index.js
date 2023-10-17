import { configureStore } from '@reduxjs/toolkit'
import waiterReducer from '../features/Waiter/store/reducer'

export const store = configureStore({
  reducer: {
    waiter: waiterReducer,
  },
})