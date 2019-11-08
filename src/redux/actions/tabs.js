import { SELECT_TAB } from "./types";

export function setTab(tab) {
  return {
    type: SELECT_TAB,
    tab: tab
  };
}
