import { Container } from "./styles"
import { IButtonProps } from "./types"

const Button = ({children, mt, mb, isDisabled}: IButtonProps) => {
  return (
    <Container mt={mt} mb={mb} isDisabled={isDisabled}>
      {children}
    </Container>
  )
}

export {Button}