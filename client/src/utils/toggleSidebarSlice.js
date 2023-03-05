import { createSlice } from "@reduxjs/toolkit";

const toggleSidebarSlice = createSlice({
  name: "toggleSidebar",
  initialState: {
    isSidebarOpen: true,
    isWatchPage: null,
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
    }
  },
});
export const {toggleMenu, closeMenu, openMenu, setIsWatchPage} = toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;
