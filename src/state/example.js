import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      state.value += 1
    },
    decrement: (state) => {
      // ... do something
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      // action.payload is the amount to increment by
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = exampleSlice.actions

export default exampleSlice.reducer