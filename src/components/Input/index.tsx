import { Container } from "./styles"
import { IInputProps } from "./types"

const Input = ({label, labelError, error, ...rest}: IInputProps) => {
  return (
    <>
      <Container error={error} {...rest} />
    </>
  )
}

export {Input}