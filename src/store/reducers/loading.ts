
import {
  START_LOADING,
  END_LOADING
} from '~src/store/types'
import { LoadingAction, LoadingState } from '~src/interface/store'

const initState = {
  show: false
}

export default function (state: LoadingState = initState, action: LoadingAction): LoadingState {
  switch (action.type) {
    case START_LOADING:
      return { ...state, show: true }
    case END_LOADING:
      return { ...state, show: false }
    default:
      return state
  }
}
