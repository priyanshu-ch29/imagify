import { createSlice } from '@reduxjs/toolkit'

const toggleSlice = createSlice({
    name: "toggleSlice",
    initialState: {
        toggle: false
    },
    reducers: {
        handleToggle: (state) => {
            state.toggle = !state.toggle
        }
    }
});

export const { handleToggle } = toggleSlice.actions

export default toggleSlice.reducer