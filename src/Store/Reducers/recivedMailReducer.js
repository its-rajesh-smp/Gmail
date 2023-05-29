import { createSlice } from "@reduxjs/toolkit";

const recivedMailReducer = createSlice({
    name: "recived/mail",
    initialState: { recived: [] },
    reducers: {
        fetchRecivedMails: (state, action) => {
            state.recived = action.payload
        }
    }
})

export default recivedMailReducer
export const { fetchRecivedMails } = recivedMailReducer.actions