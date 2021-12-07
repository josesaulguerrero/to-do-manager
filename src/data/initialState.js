export const initialState = window.localStorage.getItem("ToDos") // does the variable ToDos exist in the local storage?
   ? JSON.parse(window.localStorage.getItem("ToDos")) // if so, INITIAL_STATE is set to the value of ToDos
   : [];// else, INITIAL_STATE is set to an empty array.
