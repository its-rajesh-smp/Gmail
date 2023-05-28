import axios from "axios"
import { USERS } from "../../Firebase/API_URL"

export const sendMailToUser = (anotherPerson, subject, enteredData) => {
    return async (dispatch, getState) => {
        console.log(enteredData);
        const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        const sendTo = anotherPerson.replace(".", "").replace("@", "")
        try {
            const { data: sender } = await axios.post(`${USERS}/${userEmail}/mails/send.json`, { subject: subject, desc: enteredData, from: userEmail, to: sendTo })
            const { data: reciver } = await axios.put(`${USERS}/${sendTo}/mails/recived/${sender.name}.json`, { subject: subject, desc: enteredData, from: userEmail, to: sendTo })
            console.log("SENDED");
        } catch (error) {
            console.log(error);
        }
    }
}