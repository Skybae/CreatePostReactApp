import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./features/PostSlice";

export default configureStore({
    reducer: {
         post: PostReducer
         ,

    },
});