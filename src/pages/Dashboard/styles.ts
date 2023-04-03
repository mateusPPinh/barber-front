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
`

const Divider = styled.div`
  width: 640px;
  border: 1px solid ${props => props.theme.pallete.shape};
  margin-top: 16px;
  margin-bottom: 24px;
`;

export {
  Container,
  DashboardContainer,
  Divider,
}