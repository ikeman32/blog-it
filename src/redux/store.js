import { configureStore } from '@reduxjs/toolkit'
// import exampleReducer from '../state/example'

const store = configureStore({
  // reducer: {example: exampleReducer},
  reducer: {},
})

export default store;