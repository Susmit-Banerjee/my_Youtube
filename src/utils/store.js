import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import toggleSidebarSlice from "./toggleSidebarSlice";
import videoCategorySlice from "./videoCategorySlice";

const store = configureStore({
  reducer: {
    toggleSidebar: toggleSidebarSlice,
    searchCache: searchSlice,
    videoCategory: videoCategorySlice,
    chatData: chatSlice
  },
});

export default store;
