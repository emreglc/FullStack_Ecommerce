import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
    checked: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.checked = true
            localStorage.setItem("token", action.payload.token)
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.checked = true
            localStorage.removeItem("token")
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer