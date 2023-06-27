import styled from 'styled-components'

import { TitleContent } from '../inputs/CreatePost'

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

export default function Card({titulo, favorite, text}) {
  return (
    <CardContainer>
      <TitleContent>
        <h2>{titulo}</h2>
        <img src={favorite} />
      </TitleContent>
      <TextContent>
        <p>{text}</p>
      </TextContent>
    </CardContainer>
  )
}

Card.defaultProps = {
  titulo: 'Título',
  favorite: '/star.svg',
  text: 'Clique ou arraste o arquivo para esta área para fazer upload'
}
