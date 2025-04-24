import { createSlice } from "@reduxjs/toolkit";

export type ThemeState = {
  mode: "light" | "dark";
};

const initialState: ThemeState = {
  mode: "light",
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      toggleTheme: (state) => {
        state.mode = state.mode === "light" ? "dark" : "light";
      },
    },
  });
  
  export const { toggleTheme } = themeSlice.actions;
  export default themeSlice.reducer;