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

export default User
