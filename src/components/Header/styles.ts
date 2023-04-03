import styled from 'styled-components'

import { IHeaderProps } from './types';

const Container = styled.header<Pick<IHeaderProps, "isHeaderOnProfile">>`
  width: 100%;
  background-color: ${props => props.theme.pallete.black_medium};
  padding: ${({isHeaderOnProfile}) => {
    if (isHeaderOnProfile) {
      return `64px 166px`
    } else {
      return `32px 160px;`
    }
  }}

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    background: transparent;
    border: 0;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img``;

const UserContent = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 89px;

  a {
    margin-left: 16px;
  }
`;

const UserImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export {
  Container,
  LeftContainer,
  Logo,
  UserContent,
  UserImage,
}