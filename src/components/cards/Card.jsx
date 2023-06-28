import styled from 'styled-components'

import { FavoriteImg, TitleContent } from '../inputs/CreatePost'

const CardContainer = styled.div`
  width: 390px;
  height: 438px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
`
const TextContent = styled.div`
  padding: 15px 30px 20px 20px;

  p {
    font-size: 13px;
  }
`

export default function Card({ titulo, text, onClick, favorite }) {
  return (
    <CardContainer>
      <TitleContent>
        <h2>{titulo}</h2>
        {!favorite ? (
          <FavoriteImg src="/star.svg" onClick={onClick} />
        ) : (
          <FavoriteImg src="/favoritestar.svg" onClick={onClick} />
        )}
      </TitleContent>
      <TextContent>
        <p>{text}</p>
      </TextContent>
    </CardContainer>
  )
}

Card.defaultProps = {
  titulo: 'Título',
  text: 'Clique ou arraste o arquivo para esta área para fazer upload'
}
