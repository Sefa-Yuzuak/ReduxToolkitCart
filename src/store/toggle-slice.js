import { createSlice } from "@reduxjs/toolkit";

const initialToggleState = {
  isToggle: false,
};
const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialToggleState,
  reducers: {
    switchToggle(state) {
      state.isToggle = !state.isToggle;
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;