import { createSlice } from "@reduxjs/toolkit";

const selectedMailReducer = createSlice({
    name: "selected/Mails",
    initialState: { selectedMailObj: {} },
    reducers: {
        setSelected: (state, action) => {
            if (state.selectedMailObj[action.payload]) {
                delete state.selectedMailObj[action.payload]
            }
            else {
                state.selectedMailObj[action.payload] = true
            }
        },
        unselectAll: (state, action) => {
            state.selectedMailObj = {}
        }
    }
})

export default selectedMailReducer
export const { setSelected, unselectAll } = selectedMailReducer.actions