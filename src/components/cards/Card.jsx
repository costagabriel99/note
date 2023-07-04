import styled, { css } from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import { TitleContent } from '../inputs/CreatePost'
import Options from '../layouts/Options'
import { EditCardText } from './EditCard'

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
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 20px 11px;

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

export default function Card({ titulo, text, favorite, color, id }) {
  const { mutate } = useSWRConfig()
  const [editPost, setEditPost] = useState(false)
  const [bgColor, setBgColor] = useState(color)
  const [favorited, setFavorited] = useState(favorite)

  const handleClickFavorite = async () => {
    setFavorited(!favorited)
    try {
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/post`, {
        id,
        favorited
      })
      if (response.status === 200) {
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post/post`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleClickEdit = async () => {
    setEditPost(!editPost)
  }

  const onSaveEdit = () => {
    setEditPost(false)
    mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post/post`)
  }

  const handleClickDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/post/post?id=${id}`
      )
      if (response.status === 200) return mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post/post`)
    } catch (error) {
      console.error(error)
    }
  }

  // Função para trocar a cor do componente:

  const ColorChange = async () => {
    console.log(bgColor)
    try {
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/post`, {
        id,
        bgColor
      })
      if (response.status === 200) {
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post/post`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleClicklightBlue = () => {
    setBgColor('lightBlue')
    ColorChange()
  }
  const handleClickbrightGreen = () => {
    setBgColor('brightGreen')
    ColorChange()
  }
  const handleClickyellow = () => {
    setBgColor('yellow')
    ColorChange()
  }
  const handleClicksalmon = () => {
    setBgColor('salmon')
    ColorChange()
  }
  const handleClickrose = () => {
    setBgColor('rose')
    ColorChange()
  }
  const handleClickblue = () => {
    setBgColor('blue')
    ColorChange()
  }
  const handleClickpink = () => {
    setBgColor('pink')
    ColorChange()
  }
  const handleClicklightGreen = () => {
    setBgColor('lightGreen')
    ColorChange()
  }
  const handleClicklightOrange = () => {
    setBgColor('lightOrange')
    ColorChange()
  }
  const handleClicklightGrey = () => {
    setBgColor('lightGrey')
    ColorChange()
  }
  const handleClickdarkGrey = () => {
    setBgColor('darkGrey')
    ColorChange()
  }
  const handleClickbrown = () => {
    setBgColor('brown')
    ColorChange()
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
        {editPost ? <EditCardText value={text} id={id} onSave={onSaveEdit} /> : <p>{text}</p>}
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
  text: 'Clique ou arraste o arquivo para esta área para fazer upload',
  favorite: 'false',
  color: 'white'
}
