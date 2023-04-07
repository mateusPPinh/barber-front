import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${props => props.theme.pallete.background};

  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
`;

const ProfilePictureContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
`;

const PhotoInput = styled.div`
  padding: 0 25%;
  margin-top: -50px;

  button {
    width: 48px;
    height: 48px;
    background-color: orange;
    border-radius: 50%;
    border: 0;
    margin-left: -60px;
    margin-bottom: -40px;
  }

  input {
     
  }
`;

const Image = styled.img`
  width: 186px;
  height: 186px;
  border-radius: 50%;
`;

const ProfileContent = styled.div`
  max-width: 340px;
  width: 100%;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  input + input {
    margin-top: 8px
  }

  span {
    margin-right: auto;
  }
`;

export {Container, InputsContainer, ProfileContent, ProfilePictureContainer, PhotoInput, Image}