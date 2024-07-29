import { configureStore } from "@reduxjs/toolkit";
import treeReducer from "./treeslice";
export default configureStore({
    reducer:{
        treeReducer,
    }
})