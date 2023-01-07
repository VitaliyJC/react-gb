import * as types from './types'

export const toggleProfile = () => ({
  type: types.TOGGLE_PROFILE
})

export const auth = (auth) => ({
  type: types.IS_AUTH,
  payload: auth
})