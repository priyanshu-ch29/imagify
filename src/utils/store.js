import { configureStore } from '@reduxjs/toolkit'
import toggleSlice from './toggleSlice'
import userSlice from './userSlice'

export const store = configureStore({
    reducer: {
        toggle: toggleSlice,
        user: userSlice
    },
})