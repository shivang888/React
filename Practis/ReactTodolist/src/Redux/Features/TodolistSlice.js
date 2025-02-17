import { createSlice } from '@reduxjs/toolkit'

export const todolistSlice = createSlice({
  name: 'todolist',
  initialState: {
    todos:[]
  },
  reducers: {
    AddTodo:(state,action)=>{
    state.todos = [...state.todos,action.payload]
  },
  }
})

// Action creators are generated for each case reducer function
export const { AddTodo } = todolistSlice.actions

export default todolistSlice.reducer