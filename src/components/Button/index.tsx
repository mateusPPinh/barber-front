import { Container } from "./styles"
import { IButtonProps } from "./types"

const Button = ({children, mt, mb, isDisabled, onClick}: IButtonProps) => {
  return (
    <Container mt={mt} mb={mb} isDisabled={isDisabled} onClick={onClick}>
      {children}
    </Container>
  )
}

export {Button}