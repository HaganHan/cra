import React, { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { updateUserInfo } from '~src/store/action/userInfo'
import { Page } from '~src/interface/common'

const Login: Page = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')

  const onChangeUserName = (ev: ChangeEvent): void => {
    setUserName((ev.target as HTMLInputElement).value)
  }
  const onClickLogin = (): void => {
    dispatch(updateUserInfo(userName))
  }
  return (
    <article>
      用户名: <input value={userName} onChange={onChangeUserName} />
      <button onClick={onClickLogin}>登录</button>
      <style jsx>{`
        button {
          margin-left: 10px;
        }
      `}</style>
    </article>
  )
}

Login.mustLogout = true
Login.title = '登录'

export default Login
