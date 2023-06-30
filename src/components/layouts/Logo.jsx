import styled from 'styled-components'

const StyledLogo = styled.img`
  cursor: pointer;
  margin: 0;
  padding: 0;
  height: 37px;

  @media (max-width: 600px) {
    height: 30px;
  }
`
export default function Logo(props) {
  return <StyledLogo src="/logo.png" {...props} />
}
