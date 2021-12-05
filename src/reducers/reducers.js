// actionTypes
import { actionTypes } from "../actionTypes"

const INITIAL_STATE =
   window.localStorage.getItem("ToDos") // does the variable ToDos exist in the local storage?
      ? JSON.parse(window.localStorage.getItem("ToDos") ) // if so, INITIAL_STATE is set to the value of ToDos
      : [] // else, INITIAL_STATE is set to an empty array.

export const reducers = (state = INITIAL_STATE, action) => {
   const {type, payload} = action
   switch(type) {
      case actionTypes.completeTodo:
         const todoIndex = state.findIndex(todo => todo.ID === payload)
         const newState = {
            ...state[todoIndex].completed = true,
            ...state
         }
         JSON.stringify(window.localStorage.setItem("ToDos", newState))
         return newState
      default:
         return state
   }
}