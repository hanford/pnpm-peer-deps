import { css } from '@emotion/react'

export default function Button (props: any) {
  return (
    <button
      {...props}
      css={css`
        padding: 8px 16px;
        border-radius: 4px;
        background: orange;
      `}
    >
      Design system
    </button>
  )
}
