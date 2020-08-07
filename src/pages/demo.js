import React from 'react'
import { useDispatch } from 'react-redux'
import { startLoading, endLoading } from '@src/store/action/loading'

const Demo = props => {
  const dispatch = useDispatch()

  const onClickStartLoading = () => {
    dispatch(startLoading())
    setTimeout(() => {
      dispatch(endLoading())
    }, 1000)
  }

  return (
    <article>
      <button onClick={onClickStartLoading}>
        开始loading
      </button>
    </article>
  )
}

export default Demo
