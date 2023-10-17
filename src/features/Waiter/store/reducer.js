import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_WAITER = {
  firstName: '',
  phone: '',
}

const initialState = {
  editingTodo: DEFAULT_WAITER,
  list: [],
  listLoading: false,
  listError: '',
}

export const waiterSlice = createSlice({
  name: 'waiter',
  initialState,
  reducers: {
    getListLoading: (state) => {
      state.listLoading = true
      state.listError = ''
    },
    getListSuccess: (state, { payload }) => {
      state.list = payload
      state.listLoading = false
    },
    getListError: (state, { payload }) => {
      state.listLoading = false
      state.listError = payload
    },
    setEditItem: (state, { payload }) => {
      state.editingWaiter = payload
    },
    removeItem: (state, { payload }) => {
      state.list = state.list.filter((waiter) => waiter.id !== payload)
    },
    createItem: (state, { payload }) => {
      state.editingWaiter = { ...DEFAULT_WAITER }
      state.list = [...state.list, payload]
    },
    updateItem: (state, { payload }) => {
      state.editingWaiter = DEFAULT_WAITER
      state.list = state.list.map((waiter) => waiter.id === payload.id ? payload : waiter)
    }
  },
})

export const action = waiterSlice.actions
export const name = waiterSlice.name
export default waiterSlice.reducer