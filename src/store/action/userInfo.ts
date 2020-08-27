import { Dispatch } from 'redux'

import {
  UPDATE_USER_INFO
} from '~src/store/types'
import { startLoading, endLoading } from '~src/store/action/loading'

export function updateUserInfo (userName: string) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(startLoading())
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 500)
    })
    dispatch({ type: UPDATE_USER_INFO, userName })
    dispatch(endLoading())
  }
}
