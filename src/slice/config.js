import { createAction } from "@reduxjs/toolkit";

const setConfig = createAction("SET_CONFIG");
const setConfigKey = createAction("SET_CONFIG_KEY");

export default function config(
  state = {
    name: "D-board",
    description: "React Tailwind CSS admin template",
    url: "https://d-board.mobifica.com",
    layout: "layout-1",
    collapsed: false,
    rightSidebar: false,
    backdrop: false,
  },
  action
) {
  switch (action.type) {
    case setConfig.type:
      return {
        ...state,
        ...action.config,
      };
    case setConfigKey.type:
      let { key, value } = { ...action };
      return {
        ...state,
        [`${key}`]: value,
      };
    default:
      return state;
  }
}
