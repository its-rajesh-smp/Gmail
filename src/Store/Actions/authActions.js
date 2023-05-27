import axios from "axios"
import { SIGNUP_USER } from "../../Firebase/API_URL"
import { authUser } from "../Reducers/authReducer"

export const sighUpUser = (enteredInput) => {
    return async (dispatch, getState) => {
        try {
            const { data: authData } = await axios.post(SIGNUP_USER, { ...enteredInput, returnSecureToken: true })
            localStorage.setItem("gmail", authData.idToken)
            console.log("userAuthDone");
            dispatch(authUser(authData))
        } catch (error) {
            console.log(error);
        }
    }
}