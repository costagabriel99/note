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

const ColoredButton = styled(StyledButton)`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  font-weight: 700;
  font-size: 16px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 10px 30px;
  margin-top: 10px;

  :hover {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.primary};
  }
`

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>
}

export function SubmitButton({children}) {
  return <ColoredButton>{children}</ColoredButton>
}
