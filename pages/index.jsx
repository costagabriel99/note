import { useState } from 'react'

import Navbar from '../src/components/layouts/Navbar'
import CreatePost from '../src/components/inputs/CreatePost'
import Card from '../src/components/cards/Card'

function HomePage() {
  const [favorite, setFavorite] = useState(false)

  const handleClick = () => {
    setFavorite(!favorite)
  }

  return (
    <>
      <Navbar />
      <CreatePost onClick={handleClick} />
      <Card onClick={handleClick} />
    </>
  )
}

export default HomePage
