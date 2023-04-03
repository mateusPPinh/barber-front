import styled from "styled-components";

import { IAppointmentsCardProps } from ".";

const Container = styled.div<Pick<IAppointmentsCardProps, 'isMorningOrIsAffternon'>>`
  width: 612px;
  padding: 16px 24px;
  display: flex;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.pallete.shape};
  border-radius: 10px;
  position: ${({isMorningOrIsAffternon}) => {
    if (isMorningOrIsAffternon) {
      return `relative`
    } else return null;
  }};

  div {
    display: flex;
    align-items: center;

    div + div {
    margin-top: 16px;
  }

   .customer__name {
      margin-left: 24px;
      color: ${props => props.theme.pallete.white};
      font-size: 24px;
      font-weight: 500;
      line-height: 31px;
    }
  }

  .right__container {
    position: ${({isMorningOrIsAffternon}) => {
    if (isMorningOrIsAffternon) {
      return `relative`
    }
  }};
    span {
      margin-left: 12px;
      color: ${props => props.theme.pallete.gray}
    }
  }
`;

export {
  Container
}