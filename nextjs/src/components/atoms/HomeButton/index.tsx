import React from 'react'
import HomeIconSVG from 'src/svg/Home'
import { Container } from './styles'

const HomeButton: React.FC = () => {
  return (
    <>
      <Container>
        <HomeIconSVG />
      </Container>
    </>
  )
}

export default HomeButton
