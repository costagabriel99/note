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

  @media (max-width: 500px) {
    padding: 0 20px;
  }

  @media (max-width: 340px) {
    flex-direction: column;
    padding: 5px 20px;
  }
`

const Brand = styled.div`
  color: ${(props) => props.theme.primary};
  margin-left: 15px;
`

function Navbar() {
  const router = useRouter()

  return (
    <StyledNavbar>
      <Logo height="40px" onClick={() => router.push('/')} />
      <Brand>CoreNotes</Brand>
      <Search />
    </StyledNavbar>
  )
}

export default Navbar
