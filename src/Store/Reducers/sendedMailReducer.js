import { createSlice } from "@reduxjs/toolkit";

const sendedMailReducer = createSlice({
    name: "sended/mail",
    initialState: { sended: [] },
    reducers: {
        fetchSendedMails: (state, action) => {
            state.sended = action.payload
        },

    }
})

export default sendedMailReducer
export const { fetchSendedMails } = sendedMailReducer.actions