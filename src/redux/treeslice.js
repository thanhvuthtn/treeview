import { createSlice } from '@reduxjs/toolkit'

const treeSlice = createSlice({
  name: 'tree',
  initialState: {
    tree: {}
  },
  reducers: {
    readTree: (state, action) => {
      const newTree = action.payload
      state.tree = newTree
    }
  }
})

//reducer
const treeReducer = treeSlice.reducer

//export default
export default treeReducer

//export
export const treeSelector = state => state.treeReducer.tree

export const { readTree } = treeSlice.actions
