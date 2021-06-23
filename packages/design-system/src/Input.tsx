import styled from '@emotion/styled'

export default function InputComponent (props: any) {
  return <Input {...props} />
}

const Input = styled('input')`
  padding: 12px;
  border: 1px solid green;
`
