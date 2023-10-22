import { configureStore } from '@reduxjs/toolkit'
import postsSlices from './reducers/posts'

const store = configureStore({
    reducer: {
        posts: postsSlices,
    },
})

export default store;