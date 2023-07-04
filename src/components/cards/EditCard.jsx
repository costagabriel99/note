import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'

import { Textarea } from '../inputs/CreatePost'
import Button from '../layouts/Button'

const EditTxt = styled(Textarea)`
  padding: 0;
`

export function EditCardText({ value, id, onSave }) {
  const [txt, setTxt] = useState(value)
  const handleChange = (e) => {
    setTxt(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/post`, {
        id,
        txt
      })
      if (response.status === 200) {
        onSave()
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <EditTxt maxLength={720} value={txt} onChange={handleChange} required />
      {txt !== value && <Button type="submit">Salvar alterações</Button>}
    </form>
  )
}
