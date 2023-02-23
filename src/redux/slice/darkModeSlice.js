import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.value = !state.value
      console.log(state.value);
    },
  }
})

export const { changeMode} = darkModeSlice.actions;
export const darkModeReducer = darkModeSlice.reducer;