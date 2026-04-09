import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: "false",
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // inside the reducers all functions are called actions and we can export them to use in our components
        login: (state, actions) => {
            state.status = "true"
            state.userData = actions.payload.userData
        },
        logout: (state) => {
            state.status = "false"
            state.userData = null
        },
    },
})

export const { login, logout } = authSlice.actions // inside the reducers all functions are called actions and we can export them to use in our components

export default authSlice.reducer
