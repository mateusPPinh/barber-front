import { darken, lighten } from "polished";
import styled from "styled-components";
import { IButtonProps } from "./types";

const Container = styled.button<Pick<IButtonProps, 'mb' | 'mt' | 'isDisabled'>>`
  width: 340px;
  height: 56px;
  border-radius: 10px;

  text-align: center;
  background-color: ${props => props.theme.pallete.orange};
  border: 0;
  transition: background-color 0.2s;

  opacity: ${({isDisabled}) => {
    if (isDisabled === true) {
      return '0.1'
    } else {
      return null;
    }
  }};
  cursor: ${({isDisabled}) => {
    if (isDisabled) {
      return 'not-allowed'
    } else {
      return null
    }
  }};
  margin-top: ${({mt}) => {
    if (mt) {
      return `${mt}px`
    } else {
      return null
    }
  }};
  margin-bottom: ${({mb}) => {
    if (mb) {
      return `${mb}px`
    } else {
      return null
    }
  }};

  &:hover {
    background-color: ${darken(0.4), '#7159c1'};
    color: ${props => props.theme.pallete.white}
  };
`;

export {Container}