import { useState } from 'react'

import Navbar from '../src/components/layouts/Navbar'
import CreatePost from '../src/components/inputs/CreatePost'
import Card from '../src/components/cards/Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 6%;
  span {
    padding-left: 20px;
    margin-top: 20px;
    font-size: 12px;
  }
`
const FavoriteCards = styled.div`
  display: flex;
  align-items: center;
`
const OtherCards = styled.div`
  display: flex;
  align-items: center;
`

function HomePage() {
  const [favorite, setFavorite] = useState(false)

  const handleClick = () => {
    setFavorite(!favorite)
  }

  return (
    <>
      <Navbar />
      <CreatePost onClick={handleClick} />
      <CardsContainer>
        <span>Favoritos</span>
        <FavoriteCards>
          <Card onClick={handleClick} />
        </FavoriteCards>
          <span>Outros</span>
        <OtherCards>
          <Card />
        </OtherCards>
        
      </CardsContainer>
    </>
  )
}

export default HomePage
