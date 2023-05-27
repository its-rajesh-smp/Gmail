import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducers/authReducer";

const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer
    }
})
export default store