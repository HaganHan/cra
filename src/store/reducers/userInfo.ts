
import {
  UPDATE_USER_INFO
} from '~src/store/types'
import { UserInfoAction, UserInfoState } from '~src/interface/store'

const initState = {
  userName: ''
}

export default function (state: UserInfoState = initState, action: UserInfoAction): UserInfoState {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        userName: action.userName
      }
    default:
      return state
  }
}
