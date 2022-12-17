import * as types from './types'

export const changeCheckBox = (title) => ({
  type: types.CHECKBOX,
  payload: title
})