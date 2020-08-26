import React from 'react'
import { useDispatch } from 'react-redux'

import { updateUserInfo } from '~src/store/action/userInfo'
import { Page } from '~src/interface/common'

const Logout: Page = () => {
  const dispatch = useDispatch()

  const onClickLogout = (): void => {
    dispatch(updateUserInfo(''))
  }
  return (
    <article>
      <button onClick={onClickLogout}>登出</button>
    </article>
  )
}

Logout.mustLogin = true
Logout.title = '登出'

export default Logout
