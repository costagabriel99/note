import styled from 'styled-components'
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

function Navbar() {
  const router = useRouter()

  return (
    <StyledNavbar>
      <Logo onClick={() => router.push('/')} />
      <Brand>CoreNotes</Brand>
      <Search />
    </StyledNavbar>
  )
}

export default Navbar
