import { SELECT_PAGE, SELECT_PER_PAGE } from "./types";

export function selectPage(page, mode) {
  return {
    type: SELECT_PAGE,
    page,
    mode
  };
}

export function selectPerPage(perPage, mode) {
  return {
    type: SELECT_PER_PAGE,
    perPage,
    mode
  };
}
