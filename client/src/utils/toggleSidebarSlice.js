import { createSlice } from "@reduxjs/toolkit";

const toggleSidebarSlice = createSlice({
  name: "toggleSidebar",
  initialState: {
    isSidebarOpen: window.innerWidth>=1024?true:false,
    isWatchPage: null,
    isDeviceLarge: window.innerWidth>=1024?true:false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openMenu:(state)=>{
      state.isSidebarOpen=true;
    },
    closeMenu: (state)=>{
      state.isSidebarOpen = false;
    },
    setIsWatchPage: (state,action)=>{
      state.isWatchPage = action.payload;
    },
    setIsDeviceLarge: (state,action)=>{
      state.isDeviceLarge = action.payload;
    }
  },
});
export const {toggleMenu, closeMenu, openMenu, setIsWatchPage, setIsDeviceLarge} = toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;
