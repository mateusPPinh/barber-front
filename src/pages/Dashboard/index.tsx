import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import {MdLogout} from 'react-icons/md'

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
    </ Container>
  )
}

export default Dashboard;