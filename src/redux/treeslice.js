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
    },
    AddChild: (state, action) => {
      const childNode = action.payload
      state.tree.children.push(childNode)
    }
  }
})

//reducer
const treeReducer = treeSlice.reducer

//export default
export default treeReducer

//export
export const treeSelector = state => state.treeReducer.tree

export const { readTree, addChild } = treeSlice.actions
