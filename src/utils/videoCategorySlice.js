import { createSlice } from "@reduxjs/toolkit";

const videoCategorySlice = createSlice({
  name: "videoCategory",
  initialState: {
    country: "US",
    videoCategoryId: "20",
    isLive: false
  },
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setCategory: (state, action) => {
      state.videoCategoryId = action.payload;
    },
    setIsLive:(state,action)=>{
      state.isLive = action.payload;
    }
  },
});

export const { setCountry, setCategory, setIsLive } = videoCategorySlice.actions;
export default videoCategorySlice.reducer;
