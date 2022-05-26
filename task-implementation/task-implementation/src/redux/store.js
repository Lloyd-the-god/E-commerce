import { configureStore } from '@reduxjs/toolkit';
import PostReducer from "./postSlice";

export default configureStore({
  reducer: {
    post: PostReducer,
  }, 
});