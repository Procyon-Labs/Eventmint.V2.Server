 import { createSlice } from "@reduxjs/toolkit"

 export const initailTicketDetailState = {
    ticketName: "",
    ticketDescription:"",
    selectCategory:"",
    amount : "",
    Quantity:"",
 } 

 export const ticketSlice = createSlice({
    name:"ticketDetails",
    initialState: initailTicketDetailState,
    reducers: {
        getTicketDetails: (state, payload) => {
            const newTicketDetailState = {
               ticketName: payload.payload.ticketName,
               ticketDescription:payload.payload.ticketDescription,
               selectCategory:payload.payload.selectCategory,
               amount : payload.payload.amount,
               Quantity:payload.payload.quantity,
            }
            state = newTicketDetailState;
        }
    }
})