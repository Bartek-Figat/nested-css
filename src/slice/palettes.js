import { createAction } from "@reduxjs/toolkit";

const setPallete = createAction("SET_PALETTE");
const resetPallete = createAction("RESET_PALETTES");

export default function palettes(
  state = {
    background: "light",
    leftSidebar: "light",
    navbar: "light",
    rightSidebar: "light",
  },
  { type, palette }
) {
  switch (type) {
    case setPallete.type:
      return {
        ...state,
        ...palette,
      };
    case resetPallete.type:
      return {
        background: "light",
        leftSidebar: "light",
        navbar: "light",
        rightSidebar: "light",
      };
    default:
      return state;
  }
}
