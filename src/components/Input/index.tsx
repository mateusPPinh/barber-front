import { Container } from "./styles"
import { IInputProps } from "./types"
import { IconBaseProps } from "react-icons"

const Input = ({label, labelError, error, icon: Icon, ...rest}: IInputProps) => {
  return (
    <>
      {/* <Icon /> */}
      <Container error={error} {...rest} />
    </>
  )
}

export {Input}