import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'

const initialState = {email: '', password: ''}
const SignIn = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState(initialState)
  const [loading, setLoading] = useState(false)

  const {signIn} = useAuth()

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    console.log(value)
    setInput((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault()

    try {
      setLoading(true)
      await signIn({email: input.email, password: input.password})
      navigate('dashboard')

    } catch(err) {
      setLoading(false)
      toast.error('Usuário ou senha incorreto, tente novamente', {
        style: {
          backgroundColor: "#28262E",
          color: "#666360",
        },
        hideProgressBar: true,
        icon: false,        
      })
    }
  }
  return (
    <Container>
      <div>
        <h1>Faça seu login</h1>

        <form onSubmit={handleSubmit}>
          <Input placeholder="E-mail" onChange={handleInput} name='email' value={input.email}/>
          <Input placeholder="Senha" type='password' onChange={handleInput} name='password' value={input.password}/>
          <Button mt={24}>{loading ? 'Carregando...' : 'Entrar'}</Button>
        </form>
      </div>
      <Link to='/signup'>Criar conta</Link>
    </Container>
  )
}

export default SignIn