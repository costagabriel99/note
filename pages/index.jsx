import styled from 'styled-components'
import { withIronSessionSsr } from 'iron-session/next'

import { ironConfig } from '../lib/middlewares/ironSession'
import Navbar from '../src/components/layouts/Navbar'
import CreatePost from '../src/components/inputs/CreatePost'
import Card from '../src/components/cards/Card'

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

function HomePage({user}) {
  return (
    <>
      <Navbar />
      <CreatePost />
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

export const getServerSideProps = withIronSessionSsr(async function getServerSideProps({req}) {
  // função que roda no servidor se o usuário não está autenticado não mostra a página, redireciona ele para a page de login
  const user = req.session.user
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      }
    }
  }
  return {
    props: {
      user
    }
  }
}, ironConfig)

export default HomePage
