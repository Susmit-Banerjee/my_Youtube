import { createSlice } from "@reduxjs/toolkit";

const toggleSidebarSlice = createSlice({
  name: "toggleSidebar",
  initialState: {
    isSidebarOpen: true,
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
    }
  },
});
export const {toggleMenu, closeMenu, openMenu} = toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;
