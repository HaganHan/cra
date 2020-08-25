import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateUserInfo } from '~src/store/action/userInfo'

const Login = props => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')

  const onChangeUserName = ev => {
    setUserName(ev.target.value)
  }
  const onClickLogin = () => {
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
