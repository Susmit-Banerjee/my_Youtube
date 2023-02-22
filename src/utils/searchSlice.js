import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchCache",
  initialState: {
    //* An Object so that searching can be done in ~O(1) operation.
  },
  reducers: {
    setCacheResults: (state, action) => {
      // {
      //     ip : ["iphone", "iphone 11", "iphone 12 pro", "iphone 12 pro max"]
      // }
      return { ...state, ...action.payload };
    },
  },
});

export const { setCacheResults } = searchSlice.actions;
export default searchSlice.reducer;

/**
 * * Cache:
 *    * time complexity for seaerching in array = O(n)
 *    * time complexity for searching in obj = O(1)
 *
 *  *Best TC:
 *    * new Map() ----> even more optimized than searching inside Object --------->> H.W
 *
 */
