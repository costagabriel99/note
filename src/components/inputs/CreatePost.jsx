import { useState } from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

import Button from '../layouts/Button'

const Flexdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 600px) {
    margin: 30px 20px 0 25px;
  }
`

const CreatePostContainer = styled.form`
  width: 530px;
  min-height: 105px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.white};

  @media (max-width: 600px) {
    border-radius: 25px;
    max-width: 390px;
  }
`

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 15px 20px;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: ${(props) => props.theme.inputBorder};
  }
`

const TitleInput = styled.input`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.black};
  border: none;
  ::-webkit-input-placeholder {
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.theme.black};
  }

  &:focus {
    outline: none;
  }
`

const TextContent = styled.div`
  width: 100%;
  box-sizing: content-box;
`

const Textarea = styled(TextareaAutosize)`
  resize: none;
  border: none;
  padding: 15px 20px;
  margin-bottom: 20px;
  width: 100%;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`

const Buttondiv = styled.div`
  margin: 0 10px 10px 0;
  text-align: right;
`

const Icons = styled.img`
  cursor: pointer;
  font-size: 19px;
`

export default function CreatePost() {
  const [post, setPost] = useState('')
  const [titlePost, setTitlePost] = useState('')
  const [favorited, setFavorited] = useState(false)

  const handlePostChange = (e) => {
    setPost(e.target.value)
    console.log(post)
  }

  const handleTitleChange = (e) => {
    setTitlePost(e.target.value)
    console.log(titlePost)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPost('')
  }

  const handleClick = () => {
    setFavorited(!favorited)
    console.log('Favorito', favorited)
  }

  return (
    <Flexdiv>
      <CreatePostContainer type="submit" onSubmit={handleSubmit}>
        <TitleContent value={titlePost} onChange={handleTitleChange}>
          <TitleInput placeholder="Título" />
          {!favorited ? (
            <Icons src="/star.svg" onClick={handleClick} />
          ) : (
            <Icons src="/favoritestar.svg" onClick={handleClick} />
          )}
        </TitleContent>
        <TextContent>
          <Textarea placeholder="Criar Nota..." value={post} onChange={handlePostChange} />
        </TextContent>
        {post.length > 0 ? (
          <Buttondiv>
            <Button type="submit">Criar</Button>
          </Buttondiv>
        ) : (
          ''
        )}
      </CreatePostContainer>
    </Flexdiv>
  )
}
