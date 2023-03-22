import { createSlice } from "@reduxjs/toolkit";

export const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: {
    value: false,
  },
  reducers: {
    seenOnboarding: (state) => {
      state.value = true;
    },
  },
});

export const { seenOnboarding } = onboardingSlice.actions;

export default onboardingSlice.reducer;
