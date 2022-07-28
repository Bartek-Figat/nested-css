import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  "transparent",
  "black",
  "white",
  "red",
  "pink",
  "purple",
  "deep-purple",
  "indigo",
  "blue",
  "light-blue",
  "cyan",
  "teal",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deep-orange",
  "brown",
  "grey",
  "blue-grey",
];

export const Colors = createSlice({
  name: "colors",
  initialState,
  reducers: {
    defaultColors: (state, { payload, type }) => {
      return state;
    },
  },
});

export const { defaultColors } = Colors.actions;

export default Colors.reducer;
