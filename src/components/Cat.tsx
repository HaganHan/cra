import React from 'react'

const Cat = (props: { name: string; age: number }): JSX.Element => {
  return (
    <article>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </article>
  )
}

export default Cat
