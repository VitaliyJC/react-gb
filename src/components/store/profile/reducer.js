import * as types from './types'

const initialState = {
  toggle: false
}

export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECKBOX:
      return !state

    default:
      return state
  }
}