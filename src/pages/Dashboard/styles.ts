import styled from "styled-components";
import { lighten } from "polished";

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

export {Container}