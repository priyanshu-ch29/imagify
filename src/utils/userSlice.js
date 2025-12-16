import { createSlice } from '@reduxjs/toolkit'

const toggleSlice = createSlice({
    name: "userSlice",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload
        },
        logoutUser: (state) => {
            return null;
        }
    }
});

export const { addUser, logoutUser } = toggleSlice.actions

export default toggleSlice.reducer