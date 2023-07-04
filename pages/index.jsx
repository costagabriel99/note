import styled from 'styled-components'
import axios from 'axios'
import { withIronSessionSsr } from 'iron-session/next'
import useSWR from 'swr'

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
  @media (max-width: 926px) {
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
  flex-wrap: wrap;

  @media (max-width: 926px) {
    justify-content: center;
  }
`
const OtherCards = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  flex-wrap: wrap;

  @media (max-width: 926px) {
    justify-content: center;
  }
`

const fetcher = (url) => axios.get(url).then((res) => res.data)

function HomePage() {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/post/post`, fetcher)
  return (
    <>
      <Navbar />
      <CreatePost />
      <CardsContainer>
        <Subtitle>
          <p>Favoritos</p>
        </Subtitle>
        <FavoriteCards>
          {data?.map(
            (post) =>
              post.favorite && (
                <Card
                  key={post._id}
                  favorite={post.favorite}
                  titulo={post.title}
                  text={post.post}
                  id={post._id}
                  color={post.color}
                />
              )
          )}
        </FavoriteCards>
        <Subtitle>
          <p>Outros</p>
        </Subtitle>
        <OtherCards>
          {data?.map((post) =>
            post.favorite ? (
              ''
            ) : (
              <Card
                key={post._id}
                favorite={post.favorite}
                titulo={post.title}
                text={post.post}
                id={post._id}
              />
            )
          )}
        </OtherCards>
      </CardsContainer>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(async function getServerSideProps({ req }) {
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
