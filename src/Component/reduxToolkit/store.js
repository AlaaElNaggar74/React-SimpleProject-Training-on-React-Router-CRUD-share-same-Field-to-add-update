import { configureStore } from '@reduxjs/toolkit'

import PostsSlice from './BookSlice/PostsSlice'
import authSlice from './BookSlice/AuthSlice'
export const store = configureStore({
  reducer: {
    post:PostsSlice,
    auth:authSlice,
  },
})
