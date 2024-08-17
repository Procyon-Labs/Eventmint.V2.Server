 import { createSlice } from "@reduxjs/toolkit"

 export const initailTicketDetailState = {
    ticketName: "",
    ticketDescription:"",
    selectCategory:"",
    amount : "",
    Quantity:"",
 } 

 export const ticketSlice = createSlice({
    name: "counter",
    initialState: initailTicketDetailState,
    reducers: {
        
    }
})