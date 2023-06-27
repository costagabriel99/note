import styled from 'styled-components'

const StyledSearch = styled.form`
  width: 530px;
  box-sizing: border-box;
  position: relative;
`

const SearchNotes = styled.input`
  width: 100%;
  height: 28px;
  background-color: ${(props) => props.theme.inputBackground};
  padding: 15px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  margin-left: 15px;
  font-size: 9px;
  color: ${(props) => props.theme.black};

  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.grey};
    font-size: 9px;
  }

  &:focus {
    outline: none;
  }
`
const Icon = styled.img`
  position: absolute;
  top: 9px;
  right: 0;
  z-index: 10;
  border: none;
  background: transparent;
  outline: none;
`
const Button = styled.button`
  border: none;
  padding: 0;
  margin: -20px;
  background-color: transparent;
  cursor: pointer;
`

export default function Search() {
  return (
    <StyledSearch type="submit">
      <SearchNotes placeholder="Pesquisar Notas" />
      <Button type="submit">
        <Icon src="/search.svg" />
      </Button>
    </StyledSearch>
  )
}
