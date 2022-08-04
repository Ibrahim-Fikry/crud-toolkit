import { configureStore } from "@reduxjs/toolkit";
import postesreducer from './postsSlice'
export const store = configureStore({
    reducer:{
        posts:postesreducer
    },
})