import { createSlice } from "@reduxjs/toolkit";

export const artsSlice = createSlice({
  name: "arts",
  initialState: {
    arts: [],
  },
  reducers: {
    setArts: (state, action) => {
      state.arts = action.payload;
    },
  },
});

export const { setArts } = artsSlice.actions;
export default artsSlice.reducer;
