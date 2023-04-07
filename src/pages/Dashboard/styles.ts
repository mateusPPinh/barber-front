import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${props => props.theme.pallete.background};

  header {
    height: 144px;
    background-color: ${props => props.theme.pallete.black_medium};
    padding: 32px 160px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    span {
      color: ${props => props.theme.pallete.white}
    }

    div {
      button {
        background-color: transparent;
        border: 0;
      }
    }
  }
`;

const DashboardContainer = styled.div`
  padding: 64px 160px;

  display: flex;
  justify-content: space-between;
`

const Divider = styled.div`
  width: 640px;
  border: 1px solid ${props => props.theme.pallete.shape};
  margin-top: 16px;
  margin-bottom: 24px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.div`
  // all container
  .react-calendar {
    border: 0;
    background-color: transparent;
  }

  .react-calendar__navigation {
    background-color: ${props => props.theme.pallete.shape};
    margin-bottom: 0;
    height: 50px;
    border-radius: 10px 10px 0px 0px;

    // text color
    .react-calendar__navigation__label { 
      //span
      .react-calendar__navigation__label__labelText { 
        color: #fff;
      }
    }

    // arrows
    .react-calendar__navigation__arrow {
      color: ${props => props.theme.pallete.gray};
    }
  }

  // container com as datas
  .react-calendar__viewContainer {
    background-color: ${props => props.theme.pallete.black_medium};
  }
`;

export {
  Container,
  DashboardContainer,
  Divider,
  LeftContainer,
  RightContainer
}