import React from 'react'

import Cat from '~src/components/Cat.tsx'
import { Page } from '~src/interface/common'

const TypeScript: Page = () => {
  return (
    <article>
      <Cat name="mimi" age={3} />
    </article>
  )
}

TypeScript.title = 'TS'

export default TypeScript
