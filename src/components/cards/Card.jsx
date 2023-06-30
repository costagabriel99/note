import styled, { css } from 'styled-components'
import { useState } from 'react'

import { TitleContent } from '../inputs/CreatePost'
import Options from '../layouts/Options'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  min-height: 438px;
  border-radius: 25px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  background-color: ${(props) => {
    if (props.$bgColor === 'lightBlue') return props.theme.lightBlue
    else if (props.$bgColor === 'brightGreen') return props.theme.brightGreen
    else if (props.$bgColor === 'yellow') return props.theme.yellow
    else if (props.$bgColor === 'salmon') return props.theme.salmon
    else if (props.$bgColor === 'rose') return props.theme.rose
    else if (props.$bgColor === 'blue') return props.theme.blue
    else if (props.$bgColor === 'pink') return props.theme.pink
    else if (props.$bgColor === 'lightGreen') return props.theme.lightGreen
    else if (props.$bgColor === 'lightOrange') return props.theme.lightOrange
    else if (props.$bgColor === 'lightGrey') return props.theme.lightGrey
    else if (props.$bgColor === 'darkGrey') return props.theme.darkGrey
    else if (props.$bgColor === 'brown') return props.theme.brown
    else return props.theme.white
  }};

  @media (max-width: 600px) {
    width: auto;
    max-width: 390px;
  }
`
const TextContent = styled.div`
  padding: 15px 30px 20px 20px;

  p {
    font-size: 13px;
  }
`

const BottomContent = styled.div`
  display: flex;
  min-height: 310px;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 20px 10px;

  div {
    display: flex;
    flex: 1;
    gap: 10px;
    align-items: flex-end;
  }
`

export const Icons = styled.img`
  cursor: pointer;

  ${(props) =>
    props.$isEditing &&
    css`
      background-color: #ffe3b3;
      border-radius: 24px;
    `}

  ${(props) =>
    props.$isChange &&
    css`
      background-color: #ffe3b3;
      border-radius: 24px;
    `}
`

export default function Card({ titulo, text }) {
  const [favorite, setFavorite] = useState(false)
  const [editPost, setEditPost] = useState(false)
  const [deletePost, setDeletePost] = useState(false)
  const [bgColor, setBgColor] = useState('white')

  const handleClickFavorite = () => {
    setFavorite(!favorite)
    console.log('Favorito', favorite)
  }
  const handleClickEdit = () => {
    setEditPost(!editPost)
    console.log('Edit', editPost)
  }

  const handleClickDelete = () => {
    setDeletePost(!deletePost)
    console.log('Delete', deletePost)
  }

  // Funções handle para trocar a cor do componente:
  const handleClicklightBlue = () => {
    setBgColor('lightBlue')
  }
  const handleClickbrightGreen = () => {
    setBgColor('brightGreen')
  }
  const handleClickyellow = () => {
    setBgColor('yellow')
  }
  const handleClicksalmon = () => {
    setBgColor('salmon')
  }
  const handleClickrose = () => {
    setBgColor('rose')
  }
  const handleClickblue = () => {
    setBgColor('blue')
  }
  const handleClickpink = () => {
    setBgColor('pink')
  }
  const handleClicklightGreen = () => {
    setBgColor('lightGreen')
  }
  const handleClicklightOrange = () => {
    setBgColor('lightOrange')
  }
  const handleClicklightGrey = () => {
    setBgColor('lightGrey')
  }
  const handleClickdarkGrey = () => {
    setBgColor('darkGrey')
  }
  const handleClickbrown = () => {
    setBgColor('brown')
  }

  return (
    <CardContainer $bgColor={bgColor}>
      <TitleContent>
        <h2>{titulo}</h2>
        {!favorite ? (
          <Icons src="/star.svg" onClick={handleClickFavorite} />
        ) : (
          <Icons src="/favoritestar.svg" onClick={handleClickFavorite} />
        )}
      </TitleContent>
      <TextContent>
        <p>{text}</p>
      </TextContent>
      <BottomContent>
        <div>
          <Icons src="/edit.svg" alt="editpost" onClick={handleClickEdit} $isEditing={editPost} />
          <Options
            colors={[
              {
                onClick: handleClicklightBlue,
                optionColor: 'lightBlue'
              },
              {
                onClick: handleClickbrightGreen,
                optionColor: 'brightGreen'
              },
              {
                onClick: handleClickyellow,
                optionColor: 'yellow'
              },
              {
                onClick: handleClicksalmon,
                optionColor: 'salmon'
              },
              {
                onClick: handleClickrose,
                optionColor: 'rose'
              },
              {
                onClick: handleClickblue,
                optionColor: 'blue'
              },
              {
                onClick: handleClickpink,
                optionColor: 'pink'
              },
              {
                onClick: handleClicklightGreen,
                optionColor: 'lightGreen'
              },
              {
                onClick: handleClicklightOrange,
                optionColor: 'lightOrange'
              },
              {
                onClick: handleClicklightGrey,
                optionColor: 'lightGrey'
              },
              {
                onClick: handleClickdarkGrey,
                optionColor: 'darkGrey'
              },
              {
                onClick: handleClickbrown,
                optionColor: 'brown'
              }
            ]}
          />
        </div>
        <Icons src="/xdelete.svg" alt="deletePost" onClick={handleClickDelete} />
      </BottomContent>
    </CardContainer>
  )
}

Card.defaultProps = {
  titulo: 'Título',
  text: 'Clique ou arraste o arquivo para esta área para fazer upload'
}
