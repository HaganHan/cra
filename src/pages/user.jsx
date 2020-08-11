import React from 'react'
import { useSelector } from 'react-redux'

const User = props => {
  const userInfo = useSelector(state => state.userInfo)
  return (
    <article>
      当前用户为: {userInfo.userName}
    </article>
  )
}

User.mustLogin = true
User.title = '用户中心'

export default User
