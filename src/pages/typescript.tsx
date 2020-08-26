import React from 'react'

import Cat from '~src/components/Cat.tsx'
import { Page } from '~src/interface/common'

const TypeScript: Page = props => {
  return (
    <article>
      <Cat name="mimi" age={3} />
    </article>
  )
}

export default TypeScript
