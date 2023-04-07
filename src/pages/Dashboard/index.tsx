import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import { 
  Container,
  DashboardContainer,
  LeftContainer,
  RightContainer
} from "./styles";
 import { Fragment, useState } from "react";
 import Calendar from 'react-calendar';

//  import customer from '../../assets/customer.svg'
// import {MdLogout} from 'react-icons/md'
// import { AppointmentsCard } from "../../components/AppointmentsCard";

import { TypographyComponent } from "../../components/Typography";
import { Header } from "../../components/Header";
import emptyAvatar from '../../assets/empty-image.svg'

const Dashboard = () => {
  const [value, onChange] = useState(new Date());

  const {user, signOut} = useAuth()
  const navigate = useNavigate()

  const handleLoggoutUser = () => {
    const confirmed = window.confirm('Tem certeza que deseja sair?');
    if (confirmed) {
      signOut();
      navigate('/');
    }
  }
  
  return (
    <Fragment>
      <Header 
        photo={user.photo ? `http://localhost:3000/uploads${user.photo}` : `${emptyAvatar}`}
        handleLoggoutUser={handleLoggoutUser}
        name={user.name}
        welcomeMessage="Seja bem vindo"
      />
      <Container>
      <div>
        <DashboardContainer>
          <LeftContainer>
            <TypographyComponent size={36} color="white" lineHeight={47}>Horários agendados</TypographyComponent>
            <TypographyComponent size={16} fontWeight={500} lineHeight={21} color="orange" marginBottom={12}>
              Hoje | Dia 31 | Sexta-Feira
            </TypographyComponent>
          </LeftContainer>

          <RightContainer>
            <Calendar 
              next2Label={false}
              prev2Label={false}
            />
          </RightContainer>
        </DashboardContainer>
      </div>
    </ Container>
    </Fragment>
  )
}

export default Dashboard;