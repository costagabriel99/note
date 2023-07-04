import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import Logo from '../src/components/layouts/Logo'
import { SubmitButton } from '../src/components/layouts/Button'

const LoginContent = styled.div`
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeLogin = (e) => {
    setUser(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, {
        user,
        password
      })
      if (status === 200) {
        router.push('/')
      }
    } catch (error) {
      if (error.response.data === 'user not found')
        return alert('O usuário não existe'), setUser('')
      if (error.response.data === 'incorrect password')
        return alert('Senha incorreta'), setPassword('')
    }
  }

  return (
    <LoginContent>
      <Brand>
        <Logo />
        <h2>CoreNotes</h2>
      </Brand>
      <LoginForm onSubmit={handleSubmit}>
        <h1>Faça seu Login</h1>
        <input
          placeholder="Digite seu usuário"
          type="text"
          value={user}
          onChange={handleChangeLogin}
          maxLength={50}
          required
        />
        <input
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={handleChangePassword}
          maxLength={64}
          required
        />
        <SubmitButton type="submit">Fazer Login</SubmitButton>
      </LoginForm>
      <span>
        Não possui uma conta? Faça seu <Link href="/signup">cadastro</Link>
      </span>
    </LoginContent>
  )
}
