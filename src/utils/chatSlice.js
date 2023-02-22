import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./config";
const chatSlice = createSlice({
  name: "chatData",
  initialState: {
    allChats: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.allChats.splice(OFFSET_LIVE_CHAT,1);
      state.allChats.unshift(action.payload);
    },
  },
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;