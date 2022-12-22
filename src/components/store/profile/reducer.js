import * as types from './types'

const initialState = {
  toggle: true
}

export const profileReducer = (state = initialState, action) => {
  const {type} = action
  switch (type) {
    case types.TOGGLE_PROFILE:
      return {
        ...state,
        visible: !state.visible
      }

    default:
      return state
  }
}