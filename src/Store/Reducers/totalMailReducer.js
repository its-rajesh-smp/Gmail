import { createSlice } from "@reduxjs/toolkit";

const totalMailReducer = createSlice({
    name: "total/read-unread",
    initialState: { read: 0, unread: 0 },
    reducers: {
        fetchTotalMail: (state, action) => {
            state.read = action.payload.read
            state.unread = action.payload.unread
        },
        increaseTotalMail: (state, action) => {
            state.read = state.read + 1
            state.unread = state.unread - 1
        },
        decreaseTotalMail: (state, action) => {
            state.read = state.read - 1
            state.unread = state.unread + 1
        }

    }
})

export const { fetchTotalMail, increaseTotalMail, decreaseTotalMail } = totalMailReducer.actions
export default totalMailReducer