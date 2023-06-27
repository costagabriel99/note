import { useState } from "react";
import styled from "styled-components";
import TextareaAutosize from 'react-textarea-autosize';

const Flexdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

const CreatePostContainer = styled.div`
  width: 530px;
  min-height: 105px;
  border: 1px solid ${props => props.theme.inputBorder};
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.white};
`

const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  padding: 15px 20px;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: ${props => props.theme.inputBorder};
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
  width: 100%;
`

export default function CreatePost() {
  const [post, setPost] = useState('')

  const handleChange = (e) => {
    setPost(e.target.value)
  }



  return (
    <Flexdiv>
      <CreatePostContainer>
        <TitleContent>
          <h2>Título</h2>
          <img src="/star.svg"/>
        </TitleContent>
        <TextContent>
          <Textarea placeholder="Criar Nota..." minRows={2}/>
        </TextContent>
      </CreatePostContainer>
    </Flexdiv>
  )
}