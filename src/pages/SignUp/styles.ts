import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.pallete.background};

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    color: ${props => props.theme.pallete.white};
    text-align: center;
    margin-top: 24px;
  }

  div {
    h1 {
      font-size: 24px;
      line-height: 31.65px;
      color: ${props => props.theme.pallete.white};
      margin-bottom: 24px;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;

      input + input {
        margin-top: 8px;
      }

      .check__content {
        margin-top: 10px;
        display: flex;
        align-items: center;

        span {
          color: ${props => props.theme.pallete.gray};
          margin-left: 10px;
        }
      }
    }
  }
`;

export {Container}