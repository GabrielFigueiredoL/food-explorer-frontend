import { Container, EntryContainer, InputContainer } from "./styles"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import Button from "../../components/Button"
import { Link } from "react-router-dom"
import { useState } from "react"

import { useAuth } from "../../hooks/auth"

function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    if (!email || !password) {
      return alert("Preencha todos os campos")
    }

    signIn({ email, password })
  }
  return (
    <Container>
      <Logo />
      <EntryContainer>
        <h1>Faça Login</h1>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Exemplo: exemplo@exemplo.com.br"
            name="email"
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
        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="/register">Criar uma conta</Link>
      </EntryContainer>
    </Container>
  )
}

export default SignIn
