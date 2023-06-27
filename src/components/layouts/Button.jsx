import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.inputBorder};
  color: ${(props) => props.theme.primary};
  transition: all ease 0.3s;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    transition: all ease 0.3s;
  }
`

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>
}
