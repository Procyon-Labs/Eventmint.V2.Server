import { createSlice } from "@reduxjs/toolkit";

export const initialTicketDetailState = {
  ticketName: "",
  ticketDescription: "",
  category: "", 
  amount: 0,
  quantity: 0, 
  image: "",
  imageName: "",
  location: '',
  date:''
};

export const ticketSlice = createSlice({
  name: "ticketDetails",
  initialState: initialTicketDetailState,
  reducers: {
    getTicketDetails: (state, { payload }) => {
      state.ticketName = payload.ticketName;
      state.ticketDescription = payload.ticketDescription;
      state.category = payload.category; 
      state.amount = payload.amount;
      state.quantity = payload.quantity; 
      state.image = payload.coverImage;
      state.imageName = payload.coverImageName;
      state.location = payload.location;
      state.date = payload.date
    },
    resetTicketDetails: () => initialTicketDetailState,
  },
});

const ticketAction = ticketSlice.actions;
export { ticketAction };
