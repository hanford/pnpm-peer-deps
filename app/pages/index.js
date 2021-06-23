import Button from 'design-system/Button'
import Input from 'design-system/Input'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

export default function Home() {
  return (
    <div css={css`padding: 24px;`}>
      <div>Im from the consuming app!</div>

      <Container>
        <Button />
        <Input css={css`margin-left: 8px;border-radius: 4px;`} placeholder="Fooooo bar" />
      </Container>
    </div>
  )
}

const Container = styled('div')`
  margin-top: 24px;
`
