import axios from "axios"
import { USERS } from "../../Firebase/API_URL"
import { fetchRecivedMails } from "../Reducers/recivedMailReducer"


export const sendReadStatusAct = (mailId) => {
    return async (dispatch, getState) => {
        const myEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        const recivedMails = JSON.parse(JSON.stringify(getState().recivedMailSlice)).recived
        try {
            const { data } = await axios.delete(`${USERS}/${myEmail}/mails/recived/${mailId}/showDot.json`)

            const updatedRecivedMails = recivedMails.map((mail) => {
                if (mail.id === mailId) {
                    delete mail.showDot
                }
                return mail
            })
            dispatch(fetchRecivedMails(updatedRecivedMails))

        } catch (error) {
            console.log(error);
        }
    }
}
