import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducers/authReducer";
import recivedMailReducer from "../Reducers/recivedMailReducer";
import sendedMailReducer from "../Reducers/sendedMailReducer";
import totalMailReducer from "../Reducers/totalMailReducer";

const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer,
        recivedMailSlice: recivedMailReducer.reducer,
        sendedMailSlice: sendedMailReducer.reducer,
        totalMailSlice: totalMailReducer.reducer
    }
})
export default store