import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
  },
  reducers: {
    handleUser: (state, action) => {
      state.value = action.payload;
    },
    refreshUser: (state) => {
      state.value = {};
    },
    updateMessages: (state: any, action) => {
      state.value.messages = action.payload;
    },
    updateNegotiating: (state: any, action) => {
      state.value.negotiating = action.payload;
    },
  },
});

export const { handleUser, refreshUser, updateMessages, updateNegotiating } =
  userSlice.actions;

export default userSlice.reducer;
