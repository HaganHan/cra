import React from 'react'
import { useSelector } from 'react-redux'

import { Page } from '~src/interface/common'
import { State } from '~src/interface/store'

const User: Page = () => {
  const userInfo = useSelector((state: State) => state.userInfo)
  return (
    <article>
      当前用户为: {userInfo.userName}
    </article>
  )
}

User.mustLogin = true
User.title = '用户中心'

export default User
