import axios from "axios"
import { GET_USER, SIGNIN_USER, SIGNUP_USER, USERS } from "../../Firebase/API_URL"
import { authUser } from "../Reducers/authReducer"


export const sighUpUser = (enteredInput) => {
    return async (dispatch, getState) => {
        try {
            const { data: authData } = await axios.post(SIGNUP_USER, { ...enteredInput, returnSecureToken: true })
            localStorage.setItem("gmail", authData.idToken)
            dispatch(authUser(authData))
        } catch (error) {
            console.log(error);
        }
    }
}


export const loginUser = (enteredInput) => {
    return async (dispatch, getState) => {
        try {
            const { data: authData } = await axios.post(SIGNIN_USER, { ...enteredInput, returnSecureToken: true })
            localStorage.setItem("gmail", authData.idToken)
            dispatch(authUser(authData))

        } catch (error) {
            console.log(error);
        }
    }
}


export const fetchUser = () => {
    return async (dispatch, getState) => {
        try {
            const localIdToken = localStorage.getItem("gmail")
            if (!localIdToken) { return }
            const { data: authData } = await axios.post(GET_USER, { idToken: localIdToken })
            dispatch(authUser({ ...authData.users[0], idToken: localIdToken }))

        } catch (error) {
            console.log(error);
        }
    }
}