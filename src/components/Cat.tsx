import React, { PropsWithChildren, ReactElement } from 'react'

import { Component } from '~src/interface/common'

interface Props extends PropsWithChildren<any> {
  name: string;
  age: number;
}

interface Cat<P = {}> extends Component {
  (props: Props, context?: any): ReactElement<any, any> | null;
}

const Cat: Cat = (props: any) => {
  return (
    <article>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </article>
  )
}

export default Cat
