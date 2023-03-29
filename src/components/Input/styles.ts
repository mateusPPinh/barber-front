import styled from "styled-components";

import { IInputProps } from "./types";

const Container = styled.input<Pick<IInputProps, 'error'>>`
  width: 340px;
  height: 56px;
  border-radius: 10px;

  background: ${props => props.theme.pallete.inputs};
  border: ${({error, theme}) => {
    if (error) {
      return `1px solid ${theme.pallete.error}`
    } else {
      return '0'
    }
  }};
  color: ${props => props.theme.pallete.white};
  font-size: 16px;
  padding: 16px;

  &::placeholder {
    color: ${props => props.theme.pallete.gray_hard};
  }
`;

export {Container}