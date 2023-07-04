import styled from 'styled-components'
import axios from 'axios'
import { useRouter } from 'next/router'

import Logo from './Logo'
import Search from '../inputs/Search'

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 25px 0 35px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  box-shadow: 0px 1px 7px 0px rgba(149, 149, 149, 0.25);
  z-index: 1000;
  width: 100%;
  position: relative;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`

const Brand = styled.div`
  color: ${(props) => props.theme.primary};
  margin-left: 15px;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 11px;
  }
`

const Logout = styled.img`
  cursor: pointer;
  z-index: 10000;
  position: absolute;
  right: 30px;
`

function Navbar() {
  const router = useRouter()

  const handleLogout = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`)
    router.push('/')
  }

  return (
    <StyledNavbar>
      <Logo onClick={() => router.push('/')} />
      <Brand>CoreNotes</Brand>
      <Search />
      <Logout src="/xdelete.svg" alt="logout" onClick={handleLogout}/>
    </StyledNavbar>
  )
}

export default Navbar
