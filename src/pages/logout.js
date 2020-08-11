import React from 'react'
import { useDispatch } from 'react-redux'

import { updateUserInfo } from '@src/store/action/userInfo'

const Logout = props => {
  const dispatch = useDispatch()

  const onClickLogout = () => {
    dispatch(updateUserInfo(''))
  }
  return (
    <article>
      <button onClick={onClickLogout}>登出</button>
    </article>
  )
}

Logout.mustLogin = true

export default Logout
