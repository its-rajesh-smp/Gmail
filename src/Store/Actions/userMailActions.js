import axios from "axios"
import { USERS } from "../../Firebase/API_URL"
import { fetchSendedMails } from "../Reducers/sendedMailReducer"
import { fetchRecivedMails } from "../Reducers/recivedMailReducer"
import { fetchTotalMail } from "../Reducers/totalMailReducer"
import { unselectAll } from "../Reducers/selectedMailReducer"

export const sendMailToUser = (friendsEmail, subject, enteredData) => {
    return async (dispatch, getState) => {
        const myEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        const myFriend = friendsEmail.replace(".", "").replace("@", "")
        try {
            // For ME
            const { data: senderKey } = await axios.post(`${USERS}/${myEmail}/mails/sended.json`, {
                subject: subject,
                desc: enteredData,
                from: getState().authSlice.userData.email,
                to: friendsEmail,
            })
            // For MY FRIEND
            const { data } = await axios.put(`${USERS}/${myFriend}/mails/recived/${senderKey.name}.json`, {
                subject: subject,
                desc: enteredData,
                from: getState().authSlice.userData.email,
                to: friendsEmail,
                showDot: true
            })
        } catch (error) {
            console.log(error);
        }
    }
}



export const fetchSendboxMailsAct = () => {
    return async (dispatch, getState) => {
        const myEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        try {
            const { data } = await axios.get(`${USERS}/${myEmail}/mails/sended.json`)
            const sendedMailsArr = data ? Object.keys(data).map((mailId) => {
                return { ...data[mailId], id: mailId }
            }) : []

            dispatch(fetchSendedMails(sendedMailsArr))

        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchRecivedMailsAct = () => {
    return async (dispatch, getState) => {
        const myEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        const totalMails = { read: 0, unread: 0 }
        try {
            const { data } = await axios.get(`${USERS}/${myEmail}/mails/recived.json`)
            const recivedMailsArr = data ? Object.keys(data).map((mailId) => {
                if (data[mailId].showDot) {
                    totalMails.unread++
                }
                else {
                    totalMails.read++
                }
                return { ...data[mailId], id: mailId }
            }) : []

            dispatch(fetchRecivedMails(recivedMailsArr))
            dispatch(fetchTotalMail(totalMails))

        } catch (error) {
            console.log(error);
        }
    }
}



export const deleteMailAct = (path) => {
    return async (dispatch, getState) => {
        const myEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        const selectedObj = JSON.parse(JSON.stringify(getState().selectedMailSlice.selectedMailObj))

        for (let i in selectedObj) {
            await axios.delete(`${USERS}/${myEmail}/mails/${path === "SENDED" ? "sended" : "recived"}/${i}.json`)
        }
        if (path === "SENDED") {
            const sendedMails = getState().sendedMailSlice.sended
            const updatedAfterDeleted = sendedMails.filter((mail) => !selectedObj[mail.id])
            dispatch(fetchSendedMails(updatedAfterDeleted))
        }
        else {
            const totalMails = { read: 0, unread: 0 }

            const recivedMails = getState().recivedMailSlice.recived
            const updatedAfterDeleted = recivedMails.filter((mail) => {
                if (!selectedObj[mail.id]) {

                    if (mail.showDot) {
                        totalMails.unread++
                    }
                    else {
                        totalMails.read++
                    }
                }
                return !selectedObj[mail.id]
            })
            console.log(totalMails);
            dispatch(fetchRecivedMails(updatedAfterDeleted))
            dispatch(fetchTotalMail(totalMails))
        }
        dispatch(unselectAll())
    }
}