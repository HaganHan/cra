
import {
  START_LOADING,
  END_LOADING
} from '~src/store/types'

import { LoadingAction } from '~src/interface/store'

export function startLoading (): LoadingAction {
  return { type: START_LOADING }
}

export function endLoading (): LoadingAction {
  return { type: END_LOADING }
}
