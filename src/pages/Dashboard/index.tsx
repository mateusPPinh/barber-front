import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import { 
  Container,
  DashboardContainer,
  AppointmentsSectionContainer,
  SoonAppointmentsSectionContainer,
  MorningAppointmentsContainer,
  Divider

 } from "./styles";
 import customer from '../../assets/customer.svg'
import {MdLogout} from 'react-icons/md'
import { AppointmentsCard } from "../../components/AppointmentsCard";
import { TypographyComponent } from "../../components/Typography";

const Dashboard = () => {
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
    <Container>
      <header>
        <span>Seja bem vindo(a),<br />{user.name}</span>
        <div>
          <button onClick={handleLoggoutUser}>
            <MdLogout width={20} height={20} color='#fff'/>
          </button>
        </div>
      </header>

      <div>
        <DashboardContainer>
          <TypographyComponent size={36} color="white" lineHeight={47}>Horários agendados</TypographyComponent>
          <TypographyComponent size={16} fontWeight={500} lineHeight={21} color="orange" marginBottom={12}>
            Hoje | Dia 31 | Sexta-Feira
          </TypographyComponent>

          <AppointmentsSectionContainer>
            <SoonAppointmentsSectionContainer>
              <TypographyComponent
                fontVariant="h1"
                color="gray"
                fontWeight={400}
                size={20}
                lineHeight={26}
                marginTop={64}
                marginBottom={24}
              >
                Atendimentos a seguir
              </TypographyComponent>
              <AppointmentsCard userPick={customer} appointmentHour="20:30" customer="João Pedro"/>
            </SoonAppointmentsSectionContainer>

            <MorningAppointmentsContainer>
              <TypographyComponent size={20} color="gray" lineHeight={26} fontWeight={400} marginTop={46}>Manhã</TypographyComponent>
              <Divider />
              <AppointmentsCard userPick={customer} appointmentHour="20:30" customer="João Pedro" />
            </MorningAppointmentsContainer>
          </AppointmentsSectionContainer>
        </DashboardContainer>
      </div>
    </ Container>
  )
}

export default Dashboard;