import styled, { css } from 'styled-components'
import { useState } from 'react'

import { TitleContent } from '../inputs/CreatePost'

const CardContainer = styled.div`
  width: 390px;
  min-height: 438px;
  border-radius: 25px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  position: relative;

  ${(props) =>
    props.$bgColor === 'white' &&
    css`
      background-color: #fff;
    `}
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
const ColorContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 575px;
  height: 46px;
  border-radius: 9px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  background: ${(props) => props.theme.white};
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  left: 60px;
  position: absolute;
`
const ChooseColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`

const Color1 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #bae2ff;
  content: '';
  cursor: pointer;
`
const Color2 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #b9ffdd;
  content: '';
  cursor: pointer;
`
const Color3 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #ffe8ac;
  content: '';
  cursor: pointer;
`
const Color4 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #ffcab9;
  content: '';
  cursor: pointer;
`
const Color5 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #f99494;
  content: '';
  cursor: pointer;
`
const Color6 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #9dd6ff;
  content: '';
  cursor: pointer;
`
const Color7 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #eca1ff;
  content: '';
  cursor: pointer;
`
const Color8 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #daff8b;
  content: '';
  cursor: pointer;
`
const Color9 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #ffa285;
  content: '';
  cursor: pointer;
`
const Color10 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #cdcdcd;
  content: '';
  cursor: pointer;
`
const Color11 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #979797;
  content: '';
  cursor: pointer;
`
const Color12 = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-color: #a99a7c;
  content: '';
  cursor: pointer;
`

export const Icons = styled.img`
  cursor: pointer;
  font-size: 24px;

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
  const [changeColor, setChangeColor] = useState(false)
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
  const handleClickColor = () => {
    setChangeColor(!changeColor)
    console.log('ChangeColor', changeColor)
  }
  const handleClickDelete = () => {
    setDeletePost(!deletePost)
    console.log('Delete', deletePost)
  }

  // const handleClicksetColor = (color) => {
  //   setBgColor(color)
  //   console.log(bgColor)
  // }

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
          <Icons
            src="/color.svg"
            alt="changeColorbg"
            onClick={handleClickColor}
            $isChange={changeColor}
          />
        </div>
        <Icons src="/xdelete.svg" alt="deletePost" onClick={handleClickDelete} />
      </BottomContent>
      <ColorContainer show={changeColor}>
        <ChooseColor>
          <Color1 onClick={console.log('lightBlue')} />
          <Color2 onClick={console.log('brightGreen')} />
          <Color3 onClick={console.log('yellow')} />
          <Color4 onClick={console.log('salmon')} />
          <Color5 onClick={console.log('rose')} />
          <Color6 onClick={console.log('blue')} />
          <Color7 onClick={console.log('pink')} />
          <Color8 onClick={console.log('lightGreen')} />
          <Color9 onClick={console.log('lightOrange')} />
          <Color10 onClick={console.log('lightGrey')} />
          <Color11 onClick={console.log('darkGrey')} />
          <Color12 onClick={console.log('brown')} />
        </ChooseColor>
      </ColorContainer>
    </CardContainer>
  )
}

Card.defaultProps = {
  titulo: 'Título',
  text: 'Clique ou arraste o arquivo para esta área para fazer upload'
}
