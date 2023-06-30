import { useState } from 'react'

import Navbar from '../src/components/layouts/Navbar'
import CreatePost from '../src/components/inputs/CreatePost'
import Card from '../src/components/cards/Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 6%;
`
const Subtitle = styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
  p {
    max-width: 390px;
    flex: 1;
    text-align: left;
    padding-left: 20px;
    margin-top: 20px;
    font-size: 12px;
  }
`

const FavoriteCards = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 30px;
    align-items: center;
  }
`
const OtherCards = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
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
        <Subtitle>
          <p>Favoritos</p>
        </Subtitle>
        <FavoriteCards>
          <Card />
          <Card />
        </FavoriteCards>
        <Subtitle>
          <p>Outros</p>
        </Subtitle>
        <OtherCards>
          <Card />
          <Card />
        </OtherCards>
      </CardsContainer>
    </>
  )
}

export default HomePage
