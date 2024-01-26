import { Container, InputContainer, EntryContainer } from "./styles"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import Button from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import { api } from "../../service/api"

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    if(password.length <=5) {
      return alert("Minimo de 6 caracteres para o campo senha")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possivel cadastrar")
        }
      })
  }
  return (
    <Container>
      <Logo />
      <EntryContainer>
        <h1>Crie sua conta</h1>

        <InputContainer>
          <label htmlFor="name">Nome</label>
          <Input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Exemplo: Maria da Silva"
            name="name"
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Exemplo: exemplo@exemplo.com.br"
            name="email"
            minlength={6}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="No mínimo 6 caracteres"
            name="password"
          />
        </InputContainer>

        <Button onClick={handleSignUp} title="Criar conta" />
        <Link to="/">Já tenho uma conta</Link>
      </EntryContainer>
    </Container>
  )
}

export default SignUp
