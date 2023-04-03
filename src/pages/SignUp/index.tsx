import { Container } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import api from "../../http/api/api"
import {toast} from 'react-toastify'
import * as yup from 'yup'
import { useRef } from "react"

const initialState = {name: '', email: '', password: ''}
const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [inputChecked, setInputChecked] = useState(false);

  const formRef = useRef(null)
  console.log(formRef)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prevState: any) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleInputCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputChecked(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true)
      const userData = {
        name: input.name,
        email: input.email,
        password: input.password,
        role: inputChecked
      };

      const schema = yup.object().shape({
        name: yup.string().required('Todos os campos são obrigatórios'),
        email: yup.string().required('Todos os campos são obrigatórios'),
        password: yup.string().required('Todos os campos são obrigatórioso')
      })

      await schema.validate(userData, {
        abortEarly: false
      })

      await api.post('users', userData);
      toast.success('Seu cadastro foi realizado com sucesso, faça seu login.')
      navigate('/');
    } catch(err) {
      if (err instanceof yup.ValidationError) {
        const errors = err.message;

        toast.error(errors)
      } else {
        setLoading(false)
        toast.error('Aconteceu algum erro ao tentar cadastrar, por favor, tente novamente!')
      }
    }
  };

  return (
    <Container>
      <div>
        <h1>Crie seu cadastro agora mesmo.</h1>
        <form onSubmit={handleSubmit} ref={formRef}>
          <Input placeholder="Nome" onChange={handleInput} name='name' value={input.name} />
          <Input placeholder="E-mail" onChange={handleInput} name='email' value={input.email}/>
          <Input placeholder="Senha" type='password' onChange={handleInput} name='password' value={input.password}/>
          <div className="check__content">
            <input type='checkbox' onChange={handleInputCheckbox} />
            <span>Você vai se registrar como cabeleireiro?</span>
          </div>
          <Button mt={24}>{loading ? 'Carregando...' : 'Criar Conta'}</Button>
          <Link to='/'>Já tem cadastro? Faça seu login</Link>
        </form>
      </div>
    </Container>
  );
};

export default SignUp