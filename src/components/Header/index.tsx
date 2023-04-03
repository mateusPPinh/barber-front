import { 
  Container,
  LeftContainer,
  Logo,
  UserContent,
  UserImage,
 } from "./styles"
import { IHeaderProps } from "./types"

import logo from '../../assets/logo.svg'
import { TypographyComponent } from "../Typography"
import { Link } from "react-router-dom"
import {MdArrowBack, MdLogout} from 'react-icons/md'

import { useAuth } from "../../contexts/auth";
import {useNavigate} from 'react-router-dom';

export const Header = ({handleLoggoutUser, photo, name, welcomeMessage, isHeaderOnProfile}: IHeaderProps) => {
  const {user} = useAuth()
  const navigation = useNavigate()
  return (
    <>
      {isHeaderOnProfile ? (
        <>
          <Container>
          <button onClick={() => navigation("/dashboard")}>
            <MdArrowBack size={20} color="gray"/>
          </button>
        </Container>
        </>
      ) : (
        <Container>
          <LeftContainer>
            <Logo src={logo}/>

            <UserContent>
              <UserImage src={photo}/>
              <Link to={`/profile/${user.id}`}>
                <TypographyComponent
                  color="gray"
                  size={20}
                  fontWeight={400}
                >
                  {welcomeMessage},
                </TypographyComponent>
                <TypographyComponent
                  color="orange"
                  size={20}
                  fontWeight={500}
                >
                  {name}
                </TypographyComponent>
              </Link>
            </UserContent>
          </LeftContainer>

          <button onClick={handleLoggoutUser}>
            <MdLogout size={20} color="gray"/>
          </button>
        </Container>
      )}
    </>
  )
};

Header.defaultProps = {
  welcomeMessage: 'Seja bem vindo',
  name: 'Jonas'
}