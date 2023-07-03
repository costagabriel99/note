import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'

import Logo from '../src/components/layouts/Logo'
import { SubmitButton } from '../src/components/layouts/Button'

const SingupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  padding-bottom: 50px;
  color: ${(props) => props.theme.primary};

  input {
    border: 1px solid ${(props) => props.theme.inputBorder};
    padding: 15px 30px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);

    &:focus {
      outline: none;
    }
  }

  h1 {
    font-size: 30px;
    margin-bottom: 15px;
  }

  span {
    font-size: 14px;
    font-style: italic;
  }
`
const Brand = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  gap: 10px;

  h2 {
    font-size: 25px;
  }
`

const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export default function SignupPage() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleLogin = (e) => {
    setUser(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <SingupContent>
      <Brand>
        <Logo />
        <h2>CoreNotes</h2>
      </Brand>
      <SigninForm onSubmit={handleSubmit}>
        <h1>Faça seu Cadastro</h1>
        <input placeholder="Digite seu nome" type="text" value={name} onChange={handleName} />
        <input placeholder="Digite um usuário" type="text" value={user} onChange={handleLogin} />
        <input
          placeholder="Digite uma senha"
          type="password"
          value={password}
          onChange={handlePassword}
        />
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </SigninForm>
      <span>
        Já possui uma conta? Faça seu <Link href="/login">login</Link>
      </span>
    </SingupContent>
  )
}
