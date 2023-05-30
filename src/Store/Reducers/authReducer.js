import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "user/auth",
    initialState: {
        idToken: "",
        isAuth: false,
        userData: { email: "" }
    },
    reducers: {
        authUser: (state, action) => {
            state.idToken = action.payload.idToken,
                state.isAuth = true,
                state.userData.email = action.payload.email
        },
        logoutUser: (state) => {
            localStorage.clear("gmail")
            state.idToken = "",
                state.isAuth = false,
                state.userData = { email: "" }
        }
    }
})

export const { authUser, logoutUser } = authReducer.actions
export default authReducer